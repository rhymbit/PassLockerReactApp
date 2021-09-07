import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../Homepage/Homepage'
import NewUser from '../NewUser/NewUser'
import Profile from '../Profile/Profile'

function App() {
  
  const username = useSelector(state => state.user.username)
  const profilePageUrl = username != null ? `/${username}` : `/forbidden`

  return (
    <Switch>

      <Route path="/new-user">
        <NewUser />
      </Route>

      <Route path={profilePageUrl}>
        <Profile />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>

    </Switch>
  )
}

export default App
