import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../ThemeContext'
import {
  Container,
  Card,
  Image,
  Form,
  Btn,
  Label,
  CheckboxLabel,
  CheckboxDiv,
  Input,
  ErrMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    passwordType: 'password',
    password: '',
    username: '',
    errMsg: '',
  }

  showPassword = event => {
    const type = event.target.checked ? 'text' : 'password'
    this.setState({passwordType: type})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {password, username} = this.state
    this.setState({username: '', password: ''})
    const data = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      header: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options)
    const status = await response.json()
    if (response.ok) {
      this.setState({errMsg: ''})
      const {history} = this.props
      const token = status.jwt_token
      Cookies.set('jwt_token', token, {expires: 30})
      history.replace('/')
    } else {
      const msg = `*${status.error_msg}`
      this.setState({errMsg: msg})
    }
  }

  changeUsername = event => this.setState({username: event.target.value})

  changePassword = event => this.setState({password: event.target.value})

  render() {
    const {passwordType} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const {username, password, errMsg} = this.state
          const theme = isLightTheme ? '#ffffff' : '#181818'
          const labelClr = !isLightTheme ? '#ffffff' : '#475569'
          const cardClr = isLightTheme ? '#ffffff' : '#000000'
          const shadow = isLightTheme ? '#f1f1f1' : ''
          // console.log(username, password)
          return (
            <Container theme={theme}>
              <Card clr={cardClr} shadowClr={shadow}>
                {isLightTheme ? (
                  <Image
                    alt="logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                ) : (
                  <Image
                    alt="logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  />
                )}

                <Form onSubmit={this.onClickLogin}>
                  <Label clr={labelClr} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    value={username}
                    onChange={this.changeUsername}
                    placeholder="Username"
                    id="username"
                    type="text"
                  />
                  <Label clr={labelClr} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    value={password}
                    onChange={this.changePassword}
                    placeholder="Password"
                    id="password"
                    type={passwordType}
                  />
                  <CheckboxDiv>
                    <input
                      type="checkbox"
                      onChange={this.showPassword}
                      id="passwordCheckbox"
                    />
                    <CheckboxLabel clr={labelClr} htmlFor="passwordCheckbox">
                      Show Password
                    </CheckboxLabel>
                  </CheckboxDiv>
                  <Btn>Login</Btn>
                  <ErrMsg>{errMsg}</ErrMsg>
                </Form>
              </Card>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
