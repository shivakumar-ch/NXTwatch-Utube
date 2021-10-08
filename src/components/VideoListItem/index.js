import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../ThemeContext'
import {
  LiContainer,
  Thumbnail,
  Content,
  ContentDiv,
  ProfileImg,
  ViewsTimeDiv,
  TitlePara,
  Para,
  CountLi,
  TimeLi,
} from './styledComponents'

const VideoListItem = props => {
  const {data} = props
  const {thumbnailUrl, title, viewCount, publishedAt, channel, id} = data
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const paraClr = isLightTheme ? '#606060' : '#909090'
        const titleClr = isLightTheme ? '#212121' : '#f1f1f1'

        return (
          <LiContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Thumbnail src={thumbnailUrl} />
              <ContentDiv>
                <ProfileImg src={profileImageUrl} />
                <Content>
                  <TitlePara clr={titleClr}>{title}</TitlePara>
                  <Para clr={paraClr}>{name}</Para>
                  <ViewsTimeDiv>
                    <CountLi clr={paraClr}>
                      <p>{`${viewCount} views`}</p>
                    </CountLi>
                    <TimeLi clr={paraClr}>
                      <p>{formatDistanceToNow(new Date(publishedAt))}</p>
                    </TimeLi>
                  </ViewsTimeDiv>
                </Content>
              </ContentDiv>
            </Link>
          </LiContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoListItem
