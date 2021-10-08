import Navbar from '../Navbar'
import ThemeContext from '../ThemeContext'
import TabItemsContainer from '../TabItemsContainer'
import {
  Card,
  Container,
  NoItemsDiv,
  NoItemsImg,
  NoItemsPara,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const divClr = isLightTheme ? '#000000' : '#f1f5f6'
      const divBgClr = isLightTheme ? '#f4f4f4' : '#000000'
      return (
        <>
          <Navbar />
          <Card>
            <TabItemsContainer />
            <Container bgClr={divBgClr} clr={divClr}>
              <NoItemsDiv>
                {isLightTheme ? (
                  <NoItemsImg
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png "
                  />
                ) : (
                  <NoItemsImg
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png "
                  />
                )}
                <h1>Page Not Found</h1>
                <NoItemsPara>
                  We are sorry, the page you requested could not be found.
                </NoItemsPara>
              </NoItemsDiv>
            </Container>
          </Card>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
