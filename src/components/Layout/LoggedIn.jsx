import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../LoginLogout/Logout";

export default function LoggedIn() {
  const username = useSelector(state => state.user.username)

  let profilePageUrl = username != null ? `/${username}` : null

  return (
    <>
      {
        profilePageUrl ?
          <div className="navbar-nav">
            <Link className="nav-link" to={profilePageUrl}>Profile</Link>
            <Link className="nav-link" to={`${profilePageUrl}/passwords`}>Passwords</Link>
            <Logout />
          </div>
        :
          <Logout />
      }
    </>
  )
}