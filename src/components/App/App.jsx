import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NewUserForm from '../Forms/NewUserForm'
import HomePage from '../Homepage/Homepage'
import Passwords from '../Passwords/Passwords'
import Profile from '../Profile/Profile'

function App() {
  
  const username = useSelector(state => state.user.username)
  let profilePageUrl = username != null ? `/${username}` : `/user-not-logged-in`

  return (
    <Switch>

      <Route path="/new-user">
        <NewUserForm />
      </Route>

      <Route exact path={profilePageUrl}>
        <Profile />
      </Route>

      <Route exact path={`${profilePageUrl}/passwords`}>
        <Passwords />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>

    </Switch>
  )
}

export default App
