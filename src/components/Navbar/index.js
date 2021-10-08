import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import TabListItem from '../TabListItem'

import ThemeContext from '../ThemeContext'

import {
  NavbarEl,
  NavbarDiv,
  Logo,
  NavUl,
  ThemeBtn,
  ProfileImg,
  LogoutBtn,
  NavLogoutBtn,
  MenuDiv,
  MenuBtn,
  PopupTabDiv,
  PopupDiv,
  PopupBtn,
  LogoutPopupCardDiv,
  LogoutPopupBtnDiv,
  LogoutPopupCancelBtn,
  LogoutPopupLogoutBtn,
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

const Navbar = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme, changeTheme} = value
        // console.log(isLightTheme)
        const navClr = isLightTheme ? '#ffffff' : '#212121'

        const btnClr = isLightTheme ? '#3b82f6' : '#ffffff'

        const logoutPopupBgClr = isLightTheme ? '#ffffff' : '#212121'
        const logoutPopupClr = isLightTheme ? '#00306e' : '#f1f1f1'

        const divClr = isLightTheme ? '#000000' : '#f1f5f6'

        const tabDivClr = !isLightTheme ? '#ffffff' : '#212121'
        const tabDivBgClr = !isLightTheme ? '#212121' : '#ffffff'

        const themeChange = () => {
          changeTheme()
        }

        return (
          <NavbarEl clr={navClr}>
            <NavbarDiv>
              {isLightTheme ? (
                <Link to="/" style={{textDecoration: 'none'}}>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="logo"
                  />
                </Link>
              ) : (
                <Link to="/" style={{textDecoration: 'none'}}>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}
              <NavUl>
                <li>
                  <ThemeBtn data-testid="theme" onClick={themeChange}>
                    {isLightTheme ? <BsMoon /> : <BiSun color="#ffffff" />}
                  </ThemeBtn>
                </li>
                <li>
                  <ProfileImg
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                  <MenuDiv>
                    <Popup
                      modal
                      trigger={
                        <MenuBtn>
                          <GiHamburgerMenu color={divClr} />
                        </MenuBtn>
                      }
                    >
                      {close => (
                        <PopupDiv bgClr={tabDivBgClr} clr={tabDivClr}>
                          <PopupBtn clr={tabDivClr} onClick={() => close()}>
                            <MdClose />
                          </PopupBtn>
                          <PopupTabDiv>
                            {tabsList.map(item => (
                              <TabListItem data={item} key={item.id} />
                            ))}
                          </PopupTabDiv>
                        </PopupDiv>
                      )}
                    </Popup>
                  </MenuDiv>
                </li>
                <li>
                  <Popup
                    modal
                    trigger={<LogoutBtn clr={btnClr}>Logout</LogoutBtn>}
                  >
                    {close => (
                      <LogoutPopupCardDiv
                        clr={logoutPopupClr}
                        bgClr={logoutPopupBgClr}
                      >
                        <p>Are you sure you want to logout?</p>
                        <LogoutPopupBtnDiv>
                          <LogoutPopupCancelBtn onClick={() => close()}>
                            Cancel
                          </LogoutPopupCancelBtn>
                          <LogoutPopupLogoutBtn onClick={onLogout}>
                            Logout
                          </LogoutPopupLogoutBtn>
                        </LogoutPopupBtnDiv>
                      </LogoutPopupCardDiv>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <NavLogoutBtn onClick={onLogout}>
                        <FiLogOut color={divClr} />
                      </NavLogoutBtn>
                    }
                  >
                    {close => (
                      <LogoutPopupCardDiv
                        clr={logoutPopupClr}
                        bgClr={logoutPopupBgClr}
                      >
                        <p>Are you sure you want to logout?</p>
                        <LogoutPopupBtnDiv>
                          <LogoutPopupCancelBtn onClick={() => close()}>
                            Cancel
                          </LogoutPopupCancelBtn>
                          <LogoutPopupLogoutBtn onClick={onLogout}>
                            Logout
                          </LogoutPopupLogoutBtn>
                        </LogoutPopupBtnDiv>
                      </LogoutPopupCardDiv>
                    )}
                  </Popup>
                </li>
              </NavUl>
            </NavbarDiv>
          </NavbarEl>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
