import React from "react"
import { useSelector } from "react-redux"
import { useRouteMatch } from "react-router"
import { Route, Switch } from "react-router-dom"
import Passwords from "../Passwords/Passwords"
import DeleteProfile from "./DeleteProfile/DeleteProfile"
import ShowProfile from "./ShowProfile/ShowProfile"

function UserProfile() {

  let match = useRouteMatch()

  const username = useSelector(state => state.user.username)

  return (
    <Switch>
      <Route path={`${match.path}/edit-profile`}>Edit Profile</Route>

      <Route path={`${match.path}/delete-profile`}><DeleteProfile /></Route>

      <Route path={`${match.path}/passwords`}><Passwords /></Route>

      <Route path={`${match.path}`}><ShowProfile /></Route>

    </Switch>
  )
}

export default UserProfile