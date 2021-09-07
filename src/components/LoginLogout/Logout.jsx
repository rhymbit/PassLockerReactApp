import React from "react";
import { Button } from "react-bootstrap";
import { useGoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import logoutIcon from '../../icons/logout.svg';
import { setUserPasswords } from "../../redux/passwordsSlice";
import { setUserIsGoogleLoggedIn, setUserIsLoggedIn } from "../../redux/userSlice";

export default function Logout() {

  const onLogout = useLogout()
  const onLogoutDeletePasswords = useDeletePasswords()

  return (
    <Button
      className="logout-button"
      variant="secondary"
      href="/" 
      onClick={() => {onLogout(); onLogoutDeletePasswords();}}
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

function useDeletePasswords() {
  const dispatch = useDispatch()
  const userPasswords = useSelector(state => state.passwords.userPasswords)

  const onLogout = () => {
    dispatch(setUserPasswords(null))
  }

  return onLogout
}


export {
  useLogout,
  useDeletePasswords,
}