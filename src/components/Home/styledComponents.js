import styled from 'styled-components'

export const Card = styled.div`
  height: 90vh;
  color: #ffffff;
  display: flex;
`
export const ListCard = styled.div`
  height: 100%;
  width: 85vw;
  background-color: ${props => props.liBgClr};
  color: ${props => props.liClr};
  overflow-y: auto;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const ListDiv = styled.div`
  padding: 15px;
  height: 20vh;
`

export const MenuDiv = styled.div`
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TabDiv = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
  height: 100%;
  width: 20vw;
  color: ${props => props.clr};
  background-color: ${props => props.bgClr};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupTabDiv = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Navbar = styled.nav`
  background-color: ${props => props.clr};
  padding: 8px;
`
export const NavbarDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 90px;
  height: 15px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 20px;
  }
`
export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
`

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  border: 1px solid ${props => props.clr};
  background-color: transparent;
  color: ${props => props.clr};
  margin-left: 15px;
  border-radius: 5px;
  padding: 5px;
  padding-left: 13px;
  padding-right: 13px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
`
export const PopupBtn = styled.button`
  align-self: flex-end;
  border: none;
  background-color: transparent;
  color: ${props => props.clr};
`
export const PopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 30px;
  color: ${props => props.clr};
  background-color: ${props => props.bgClr};
`

export const NavLogoutBtn = styled.button`
  margin-left: 15px;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutPopupBtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 170px;
`

export const LogoutPopupLogoutBtn = styled.button`
  border: 2px solid #3b82f6;
  border-radius: 5px;
  background-color: #3b82f6;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  color: #ffffff;
`
export const LogoutPopupCancelBtn = styled.button`
  border: 1px solid #94a3b8;
  border-radius: 5px;
  background-color: transparent;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  color: #94a3b8;
`
export const LogoutPopupDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

export const LogoutPopupCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 300px;
  background-color: ${props => props.bgClr};
  color: ${props => props.clr};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  opacity: 1;
  @media screen and (max-width: 767px) {
    height: 150px;
    width: 90%;
  }
`
export const BannerDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  padding: 15px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const BannerPara = styled.p`
  margin-top: 20px;
  max-width: 310px;
`

export const BannerBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  color: #000000;
  margin-top: 20px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchIconBtn = styled.div`
  width: 20%;
  height: 25px;
  background-color: ${props => props.bgClr};
  border: 1px solid ${props => props.borderClr};
  border-left: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 90%;
  height: 25px;
  padding: 15px;
  background-color: transparent;
  padding: 5px;
  outline: none;
  border: none;
  color: ${props => props.clr};
  border: 1px solid ${props => props.borderClr};
`
export const ListUl = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const NoItemsPara = styled.p`
  font-weight: bold;
`
export const NoItemsImg = styled.img`
  width: 250px;
  height: 180px;
`
export const NoItemsDiv = styled.div`
  width: 100%;
  height: 90%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const RetryBtn = styled.button`
  padding: 5px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #4f46e5;
  border: none;
  color: #f1f1f1;
`
export const LoaderDiv = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
