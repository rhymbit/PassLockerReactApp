import React from "react";
import { Button } from "react-bootstrap";
import { useGoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import logoutIcon from '../../icons/logout.ico';
import { setUserIsGoogleLoggedIn, setUserIsLoggedIn } from "../../redux/userSlice";

export default function Logout() {

  const onLogout = useLogout()
  const dispatch = useDispatch()

  return (
    <Button
      variant="secondary"
      href="/" 
      onClick={onLogout}
      className="d-inline-block align-top"
    >
      <img
        alt="LogoutIcon"
        src={logoutIcon}
        width={23}
        height={23}
        className="d-inline-block align-top"
      />{' '}Logout
    </Button>
  )
}

function useLogout() {

  const dispatch = useDispatch()

  const isGoogleLoggedIn = useSelector(state => state.user.isGoogleLoggedIn)
  
  const clientId = useSelector(state => state.user.googleClientId) 

  const { signOut } = useGoogleLogout({
    clientId: clientId,
    jsSrc: `https://apis.google.com/js/api.js`,
    onLogoutSuccess: () => {
      dispatch(setUserIsLoggedIn(false))
      dispatch(setUserIsGoogleLoggedIn(false))
    }
  })

  if (isGoogleLoggedIn) {
    return signOut
  }
}