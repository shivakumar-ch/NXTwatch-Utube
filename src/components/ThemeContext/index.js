import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: '',
  changeTheme: () => {},
})

export default ThemeContext
