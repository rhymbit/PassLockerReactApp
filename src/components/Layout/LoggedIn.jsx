import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import keyIcon from "../../icons/key.svg";
import manAvatar from "../../icons/man-avatar.svg";
import otherAvatar from "../../icons/other-avatar.svg";
import womanAvatar from "../../icons/woman-avatar.svg";
import Logout from "../LoginLogout/Logout";

export default function LoggedIn() {
  const username = useSelector(state => state.user.username)
  const gender = useSelector(state => state.user.gender)

  let profilePageUrl = username != null ? `/${username}` : null


  return (
    <>
      {
        profilePageUrl ?
          <>
            <Link className="nav-link" to={profilePageUrl}>
              {icon(gender)}
              Profile
            </Link>

            <Link className="nav-link" to={`${profilePageUrl}/passwords`}>
              {icon(`key`)}
              Passwords
            </Link>

            <Logout />
          </>
        :
          <Logout />
      }
    </>
  )
}

function icon(gender) {

  let src;

  switch (gender.toLowerCase()) {
    case `male`:
      src = manAvatar
      break
    case `female`:
      src = womanAvatar
      break
    case `other`:
      src = otherAvatar
      break
    default:
      src = keyIcon
      break
  }

  return (
    <>
      <img
        src={src}
        width={22}
        height={22}
      />{' '}
    </>
  )
}