import {Component} from 'react'

import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import ThemeContext from '../ThemeContext'
import TabItemsContainer from '../TabItemsContainer'
import {
  Container,
  Card,
  NoItemsDiv,
  NoItemsImg,
  NoItemsPara,
  RetryBtn,
  LoaderDiv,
  Thumbnail,
  Title,
  Head,
  IconDiv,
  VideosUl,
  VideosLi,
  Para,
  Info,
  CountPara,
} from './styledComponents'

const apiReq = {
  isLoading: 'LOADING',
  isSuccesful: 'SUCCESS',
  isFailure: 'FAILURE',
  isIntialized: 'INTIALIZE',
}

class Gaming extends Component {
  state = {
    itemsList: [],
    apiStatus: apiReq.isIntialized,
  }

  componentDidMount() {
    this.getListItems()
  }

  getListItems = async () => {
    this.setState({apiStatus: apiReq.isLoading})
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
    const url = 'https://apis.ccbp.in/videos/gaming'
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      // console.log(updatedData)
      this.setState({
        itemsList: [...updatedData],
        apiStatus: apiReq.isSuccesful,
      })
    } else {
      this.setState({apiStatus: apiReq.isFailure})
    }
  }

  getGamingSectionDetails = () => {
    const {apiStatus, itemsList, theme} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const paraClr = isLightTheme ? '#606060' : '#909090'
          const titleClr = isLightTheme ? '#212121' : '#f1f1f1'

          switch (apiStatus) {
            case apiReq.isSuccesful:
              if (itemsList.length === 0) {
                return (
                  <NoItemsDiv>
                    <NoItemsImg
                      alt="no videos"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                    />
                    <NoItemsPara>No search results found</NoItemsPara>
                    <p>Try different key words or remove search filter</p>
                    <RetryBtn onClick={this.getListItems}>Retry</RetryBtn>
                  </NoItemsDiv>
                )
              }
              return (
                <>
                  <VideosUl>
                    {itemsList.map(item => (
                      <VideosLi key={item.id}>
                        <Link
                          to={`/Videos/${item.id}`}
                          style={{textDecoration: 'none'}}
                        >
                          <Thumbnail src={item.thumbnailUrl} />
                          <Info>
                            <Para clr={titleClr}>{item.title}</Para>
                            <CountPara clr={paraClr}>
                              {`${item.viewCount} Watching Worldwide`}
                            </CountPara>
                          </Info>
                        </Link>
                      </VideosLi>
                    ))}
                  </VideosUl>
                </>
              )

            case apiReq.isFailure:
              return (
                <NoItemsDiv>
                  {theme ? (
                    <NoItemsImg
                      alt="failure view"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png "
                    />
                  ) : (
                    <NoItemsImg
                      alt="failure view"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png "
                    />
                  )}
                  <NoItemsPara>Oops! Something went wrong</NoItemsPara>
                  <p>Try different key words or remove search filter</p>
                  <RetryBtn onClick={this.getListItems}>Retry</RetryBtn>
                </NoItemsDiv>
              )
            case apiReq.isLoading:
              return (
                <LoaderDiv>
                  <Loader
                    type="TailSpin"
                    color="#64748b"
                    width={30}
                    height={30}
                  />
                </LoaderDiv>
              )
            default:
              return null
          }
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const divClr = isLightTheme ? '#000000' : '#f1f5f6'
          const divBgClr = isLightTheme ? '#f4f4f4' : '#000000'
          const iconBgClr = isLightTheme ? '#d7dfe9' : '#000000'
          const titleBg = isLightTheme ? '#cccccc' : '#181818'
          return (
            <>
              <Navbar />
              <Card>
                <TabItemsContainer />
                <Container bgClr={divBgClr} clr={divClr}>
                  <Title bg={titleBg}>
                    <IconDiv bgClr={iconBgClr}>
                      <SiYoutubegaming color="red" width={30} height={30} />
                    </IconDiv>
                    <Head>Gaming</Head>
                  </Title>
                  {this.getGamingSectionDetails()}
                </Container>
              </Card>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
