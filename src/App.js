import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ThemeContext from './components/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import Trending from './components/Trending'

// Replace your code here
class App extends Component {
  state = {
    isLightTheme: true,
    savedItems: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  changeSavedItems = item => {
    this.setState(prevState => ({
      savedItems: [
        ...prevState.savedItems,
        {...item, channel: {...item.channel}},
      ],
    }))
  }

  deleteSavedItem = delItem => {
    const {savedItems} = this.state
    const updatedItems = savedItems.filter(item => delItem.id !== item.id)
    this.setState({savedItems: [...updatedItems]})
  }

  render() {
    const {isLightTheme, savedItems} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isLightTheme,
          savedItems,
          changeTheme: this.changeTheme,
          changeSavedItems: this.changeSavedItems,
          deleteSavedItem: this.deleteSavedItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/Trending" component={Trending} />
          <ProtectedRoute exact path="/Gaming" component={Gaming} />
          <ProtectedRoute exact path="/SavedVideos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
