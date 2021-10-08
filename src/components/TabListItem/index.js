import {Link, withRouter} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../ThemeContext'
import {LiContainer, Para, Btn} from './styledComponents'

const TabListItem = props => {
  const {data, match} = props
  const {displayText, id, route} = data
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const btnClr = isLightTheme ? '#0f0f0f' : '#f1f1f1'
        const activeTabId = match.path === route && match.isExact

        const tabIcons = [
          {
            id: 'HOMETAB',
            icon: <AiFillHome color={activeTabId ? 'ff0000' : '#909090'} />,
          },
          {
            id: 'TRENDINGTAB',
            icon: <HiFire color={activeTabId ? 'ff0000' : '#909090'} />,
          },
          {
            id: 'GAMINGTAB',
            icon: (
              <SiYoutubegaming color={activeTabId ? 'ff0000' : '#909090'} />
            ),
          },
          {
            id: 'SAVEDVIDEOSTAB',
            icon: <BiListPlus color={activeTabId ? 'ff0000' : '#909090'} />,
          },
        ]

        const getTabIcon = val => {
          const item = tabIcons.filter(tab => tab.id === val)
          return item[0].icon
        }

        const fontWeight = activeTabId ? 'bold' : 'normal'
        let liBg = 'transparent'
        if (activeTabId) {
          liBg = isLightTheme ? '#e2e8f0' : '#424242'
        }

        return (
          <LiContainer clr={liBg}>
            <Link to={route} style={{textDecoration: 'none', width: '100%'}}>
              <Btn weight={fontWeight} clr={btnClr}>
                {getTabIcon(id)}
                <Para>{displayText}</Para>
              </Btn>
            </Link>
          </LiContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(TabListItem)
