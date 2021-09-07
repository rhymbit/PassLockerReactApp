import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouteMatch } from "react-router"
import { Route, Switch } from "react-router-dom"
import { setCanDeleteProfile } from "../../redux/userSlice"
import Passwords from "../Passwords/Passwords"
import DeleteProfile from "./DeleteProfile/DeleteProfile"
import EditProfile from "./EditProfile/EditProfile"
import ShowProfile from "./ShowProfile/ShowProfile"

function Profile() {

  let match = useRouteMatch()

  const dispatch = useDispatch()
  const canDeleteProfile = useSelector(state => state.user.canDeleteProfile) 

  useEffect(() => {    
    canDeleteProfile ? dispatch(setCanDeleteProfile(false)) : null
  })

  return (
    <Switch>
      <Route path={`${match.path}/edit-profile`}><EditProfile /></Route>

      <Route path={`${match.path}/delete-profile`}><DeleteProfile /></Route>

      <Route path={`${match.path}/passwords`}><Passwords /></Route>

      <Route path={`${match.path}`}><ShowProfile /></Route>

    </Switch>
  )
}

export default Profile