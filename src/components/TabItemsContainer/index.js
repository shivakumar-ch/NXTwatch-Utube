import TabListItem from '../TabListItem'
import ThemeContext from '../ThemeContext'
import {
  Container,
  TabDiv,
  ContactImg,
  ContactLi,
  ContactUl,
  Para,
} from './styledComponents'

const tabsList = [
  {
    id: 'HOMETAB',
    displayText: 'Home',
    route: '/',
  },
  {
    id: 'TRENDINGTAB',
    displayText: 'Trending',
    route: '/Trending',
  },
  {
    id: 'GAMINGTAB',
    displayText: 'Gaming',
    route: '/Gaming',
  },
  {
    id: 'SAVEDVIDEOSTAB',
    displayText: 'Saved videos',
    route: '/SavedVideos',
  },
]

const TabItemsContainer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const tabDivClr = !isLightTheme ? '#ffffff' : '#212121'
      const tabDivBgClr = !isLightTheme ? '#212121' : '#ffffff'
      return (
        <Container bgClr={tabDivBgClr} clr={tabDivClr}>
          <TabDiv bgClr={tabDivBgClr} clr={tabDivClr}>
            {tabsList.map(item => (
              <TabListItem data={item} key={item.id} />
            ))}
          </TabDiv>
          <ContactUl>
            <ContactLi>
              <p>CONTACT US</p>
            </ContactLi>
            <ContactLi>
              <ContactImg
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <ContactImg
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <ContactImg
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </ContactLi>
            <ContactLi>
              <Para>Enjoy! Now to see your channels and recommendations!</Para>
            </ContactLi>
          </ContactUl>
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default TabItemsContainer
