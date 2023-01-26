import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import './App.css'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoPlay from './components/VideoPlay'
import NxtContext from './context/NxtContext'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDark: false}

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <NxtContext.Provider value={{isDark, toggleTheme: this.toggleTheme}}>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlay} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
