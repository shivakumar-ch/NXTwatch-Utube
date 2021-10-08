import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Navbar from '../Navbar'
import ThemeContext from '../ThemeContext'
import TabItemsContainer from '../TabItemsContainer'
import {
  Container,
  Card,
  NoItemsDiv,
  NoItemsImg,
  NoItemsPara,
  VideoDiv,
  RetryBtn,
  LoaderDiv,
  TitlePara,
  ViewsTimeDiv,
  CountLi,
  TimeLi,
  InfoDiv,
  BtnLi,
  LikesUl,
  HrLine,
  ContentDiv,
  Content,
  ProfileImg,
  Para,
  BtnPara,
} from './styledComponents'

const apiReq = {
  isLoading: 'LOADING',
  isSuccesful: 'SUCCESS',
  isFailure: 'FAILURE',
  isIntialized: 'INTIALIZE',
}

class VideoItemDetails extends Component {
  state = {
    itemsList: {
      similarVideos: [],
      videoDetails: {channel: {}},
    },
    apiStatus: apiReq.isIntialized,
    isLiked: '',
  }

  componentDidMount() {
    this.getListItems()
  }

  changeToLike = () => this.setState({isLiked: 'LIKE'})

  changeToDislike = () => this.setState({isLiked: 'DISLIKE'})

  getListItems = async () => {
    this.setState({apiStatus: apiReq.isLoading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = {
        similarVideos: data.similar_videos.map(item => ({
          channel: {
            name: item.channel.name,
            profileImageUrl: item.channel.profile_image_url,
          },
          id: item.id,
          publishedAt: item.published_at,
          thumbnailUrl: item.thumbnail_url,
          title: item.title,
          viewCount: item.view_count,
          videoUrl: item.video_url,
        })),
        videoDetails: {
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
          },
          description: data.video_details.description,
          id: data.video_details.id,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          title: data.video_details.title,
          viewCount: data.video_details.view_count,
          videoUrl: data.video_details.video_url,
        },
      }

      this.setState({
        itemsList: {
          similarVideos: [...updatedData.similarVideos],
          videoDetails: {
            ...updatedData.videoDetails,
            channel: {...updatedData.videoDetails.channel},
          },
        },
        apiStatus: apiReq.isSuccesful,
      })
    } else {
      this.setState({apiStatus: apiReq.isFailure})
    }
  }

  render() {
    const {apiStatus, itemsList, theme, isLiked} = this.state
    const {videoDetails} = itemsList
    const {
      videoUrl,
      viewCount,
      publishedAt,
      title,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isLightTheme,
            changeSavedItems,
            deleteSavedItem,
            savedItems,
          } = value
          // console.log(savedItems === videoDetails, 'includes')
          let isSaved = false
          const paraClr = isLightTheme ? '#606060' : '#909090'
          let saveClr = isSaved ? '#4f4ee5' : paraClr
          let saveText = isSaved ? 'Saved' : 'save'
          if (videoDetails.id !== undefined && savedItems.length !== 0) {
            const it = savedItems.filter(item => item.id === videoDetails.id)
            if (it.length !== 0) {
              isSaved = it[0].id === videoDetails.id
              saveClr = isSaved ? '#4f4ee5' : paraClr
              saveText = isSaved ? 'Saved' : 'save'
            }
          }

          savedItems.includes(videoDetails)

          const divClr = isLightTheme ? '#000000' : '#f1f5f6'
          const divBgClr = isLightTheme ? '#f4f4f4' : '#000000'

          const likeClr = isLiked === 'LIKE' ? '#4f4ee5' : paraClr
          const dislikeClr = isLiked === 'DISLIKE' ? '#4f4ee5' : paraClr

          const saveVideoBtn = () => {
            if (!isSaved) {
              changeSavedItems(videoDetails)
            } else {
              deleteSavedItem(videoDetails)
            }
          }

          /* console.log(savedItems, 'savedItems') */

          switch (apiStatus) {
            case apiReq.isSuccesful:
              return (
                <>
                  <Navbar />
                  <Card>
                    <TabItemsContainer />
                    <Container bgClr={divBgClr} clr={divClr}>
                      <VideoDiv>
                        <ReactPlayer width="100%" height="59%" url={videoUrl} />
                        <TitlePara>{title}</TitlePara>
                        <InfoDiv clr={paraClr}>
                          <ViewsTimeDiv>
                            <CountLi>
                              <p>{`${viewCount} views`}</p>
                            </CountLi>
                            <TimeLi>
                              <p>
                                {formatDistanceToNow(new Date(publishedAt))}
                              </p>
                            </TimeLi>
                          </ViewsTimeDiv>
                          <LikesUl>
                            <BtnLi onClick={this.changeToLike}>
                              <BiLike color={likeClr} />
                              <BtnPara clr={likeClr}>Like</BtnPara>
                            </BtnLi>
                            <BtnLi onClick={this.changeToDislike}>
                              <BiDislike color={dislikeClr} />
                              <BtnPara clr={dislikeClr}>Dislike</BtnPara>
                            </BtnLi>
                            <BtnLi onClick={saveVideoBtn}>
                              <BiListPlus color={saveClr} />
                              <BtnPara clr={saveClr}>{saveText}</BtnPara>
                            </BtnLi>
                          </LikesUl>
                        </InfoDiv>
                        <HrLine />
                        <ContentDiv>
                          <ProfileImg src={profileImageUrl} />
                          <Content>
                            <p clr={paraClr}>{name}</p>
                            <Para
                              clr={paraClr}
                            >{`${viewCount} Subscribers`}</Para>
                            <Para>{description}</Para>
                          </Content>
                        </ContentDiv>
                      </VideoDiv>
                    </Container>
                  </Card>
                </>
              )
            case apiReq.isFailure:
              return (
                <>
                  <Navbar />
                  <Card>
                    <TabItemsContainer />
                    <Container bgClr={divBgClr} clr={divClr}>
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
                    </Container>
                  </Card>
                </>
              )
            case apiReq.isLoading:
              return (
                <>
                  <Navbar />
                  <Card>
                    <TabItemsContainer />
                    <LoaderDiv bgClr={divBgClr} clr={divClr}>
                      <Loader
                        type="TailSpin"
                        color="#64748b"
                        width={30}
                        height={30}
                      />
                    </LoaderDiv>
                  </Card>
                </>
              )
            default:
              return null
          }
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails

/*  */
