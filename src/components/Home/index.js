import {Component} from 'react'
// import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {BiSearch} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import ThemeContext from '../ThemeContext'

import Navbar from '../Navbar'

import {
  Card,
  Logo,
  PopupBtn,
  ListCard,
  BannerDiv,
  BannerBtn,
  BannerPara,
  ListDiv,
  SearchDiv,
  SearchInput,
  SearchIconBtn,
  ListUl,
  NoItemsDiv,
  NoItemsImg,
  NoItemsPara,
  RetryBtn,
  LoaderDiv,
} from './styledComponents'
import './index.css'
import VideoListItem from '../VideoListItem'
import TabItemsContainer from '../TabItemsContainer'

const apiReq = {
  isLoading: 'LOADING',
  isSuccesful: 'SUCCESS',
  isFailure: 'FAILURE',
  isIntialized: 'INTIALIZE',
}

class Home extends Component {
  state = {
    searchInput: '',
    itemsList: [],
    showBanner: true,
    apiStatus: apiReq.isIntialized,
  }

  componentDidMount() {
    this.getListItems()
  }

  getListItems = async () => {
    this.setState({apiStatus: apiReq.isLoading})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(item => ({
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        itemsList: [...updatedData],
        apiStatus: apiReq.isSuccesful,
      })
    } else {
      this.setState({apiStatus: apiReq.isFailure})
    }
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  getHomeSectionDetails = theme => {
    const {apiStatus, itemsList} = this.state
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
              <RetryBtn>Retry</RetryBtn>
            </NoItemsDiv>
          )
        }
        return (
          <ListUl>
            {itemsList.map(item => (
              <VideoListItem data={item} key={item.id} />
            ))}
          </ListUl>
        )

      case apiReq.isFailure:
        return (
          <NoItemsDiv>
            {theme ? (
              <NoItemsImg
                alt="no saved videos"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              />
            ) : (
              <NoItemsImg
                alt="no saved videos"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              />
            )}
            <NoItemsPara>Oops! Something went wrong</NoItemsPara>
            <p>
              We are haing some trouble to complete your request.Please try
              again.
            </p>
            <RetryBtn onClick={this.getListItems}>Retry</RetryBtn>
          </NoItemsDiv>
        )
      case apiReq.isLoading:
        return (
          <LoaderDiv>
            <Loader type="TailSpin" color="#64748b" width={30} height={30} />
          </LoaderDiv>
        )
      default:
        return null
    }
  }

  storeInput = event => this.setState({searchInput: event.target.value})

  closeBanner = () => this.setState({showBanner: false})

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          // console.log(isLightTheme)

          const searchClr = isLightTheme ? '#212121' : '#909090'
          const searchBorderClr = isLightTheme ? '#909090' : '#212121'
          const searchIconBgClr = isLightTheme ? '#cccccc' : '#212121'
          const searchIconClr = isLightTheme ? '#909090' : '#cccccc'

          const divClr = isLightTheme ? '#000000' : '#f1f5f6'
          const divBgClr = isLightTheme ? '#f4f4f4' : '#000000'

          return (
            <div>
              <Navbar />
              <Card>
                <TabItemsContainer />
                <ListCard liClr={divClr} liBgClr={divBgClr}>
                  {showBanner && (
                    <BannerDiv>
                      <PopupBtn onClick={this.closeBanner}>
                        <MdClose />
                      </PopupBtn>
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="logo"
                      />
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerPara>
                      <BannerBtn>GET IT NOW</BannerBtn>
                    </BannerDiv>
                  )}
                  <ListDiv>
                    <SearchDiv>
                      <SearchInput
                        borderClr={searchBorderClr}
                        onChange={this.storeInput}
                        bgClr={searchClr}
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        clr={searchClr}
                      />
                      <SearchIconBtn
                        onClick={this.getListItems}
                        borderClr={searchBorderClr}
                        bgClr={searchIconBgClr}
                      >
                        <BiSearch color={searchIconClr} />
                      </SearchIconBtn>
                    </SearchDiv>
                    {this.getHomeSectionDetails()}
                  </ListDiv>
                </ListCard>
              </Card>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
