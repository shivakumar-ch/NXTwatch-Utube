import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import Navbar from '../Navbar'
import ThemeContext from '../ThemeContext'
import TabItemsContainer from '../TabItemsContainer'
import {
  Container,
  Card,
  Thumbnail,
  Title,
  Head,
  IconDiv,
  VideosUl,
  Li,
  Para,
  Info,
  ViewsTimeDiv,
  CountLi,
  TimeLi,
  NoItemsDiv,
  NoItemsImg,
  NoItemsPara,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, savedItems} = value
      const divClr = isLightTheme ? '#000000' : '#f1f5f6'
      const divBgClr = isLightTheme ? '#f4f4f4' : '#000000'
      const paraClr = isLightTheme ? '#606060' : '#909090'
      const titleClr = isLightTheme ? '#212121' : '#f1f1f1'
      const iconBgClr = isLightTheme ? '#d7dfe9' : '#000000'
      const titleBg = isLightTheme ? '#cccccc' : '#181818'
      /* console.log(savedItems) */

      if (savedItems.length === 0) {
        return (
          <>
            <Navbar />
            <Card>
              <TabItemsContainer />
              <Container bgClr={divBgClr} clr={divClr}>
                <NoItemsDiv>
                  <NoItemsImg
                    alt="no saved videos"
                    src="
https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  />
                  <NoItemsPara>No saved videos found</NoItemsPara>
                  <p>Save your videos by clicking a button</p>
                </NoItemsDiv>
              </Container>
            </Card>
          </>
        )
      }
      return (
        <>
          <Navbar />
          <Card>
            <TabItemsContainer />
            <Container bgClr={divBgClr} clr={divClr}>
              <Title bg={titleBg}>
                <IconDiv bgClr={iconBgClr}>
                  <BiListPlus color="red" />
                </IconDiv>
                <Head>Saved Videos</Head>
              </Title>
              <VideosUl>
                {savedItems.map(item => (
                  <Link
                    to={`/Videos/${item.id}`}
                    style={{textDecoration: 'none'}}
                    key={item.id}
                  >
                    <Li>
                      <Thumbnail
                        alt="video thumbnail"
                        src={item.thumbnailUrl}
                      />
                      <Info>
                        <Para clr={titleClr}>{item.title}</Para>
                        <ViewsTimeDiv>
                          <CountLi clr={paraClr}>
                            <p>{`${item.viewCount} views`}</p>
                          </CountLi>
                          <TimeLi clr={paraClr}>
                            <p>
                              {formatDistanceToNow(new Date(item.publishedAt))}
                            </p>
                          </TimeLi>
                        </ViewsTimeDiv>
                      </Info>
                    </Li>
                  </Link>
                ))}
              </VideosUl>
            </Container>
          </Card>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
