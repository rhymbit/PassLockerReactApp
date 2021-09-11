import React from "react"
import { Dropdown } from "react-bootstrap"
import { useGoogleLogin } from "react-google-login"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'
import googleIcon from "../../icons/google.svg"
import { googleUserLogin, setUserProfilePictureUrl } from "../../redux//userSlice"
import { createBackendUrl } from "../../redux/appSlice"


export default function LoginGoogle() {
  const signIn = useLogin()

  const isNewUser = useSelector(state => state.user.isNewUser)

  return (
    <>
      {
        isNewUser ?
          <Redirect to="new-user" />
        :
          <Dropdown.Item onClick={signIn}>
            <img
              alt="GoogleIcon"
              src={googleIcon}
              width={23}
              height={23}
              className="d-inline-block align-top"
            />{' '}
            Login With Google
          </Dropdown.Item>  
      }
    </>
  )
}

function useLogin() {
  const dispatch = useDispatch()
  const clientId = useSelector(state => state.app.googleClientId)
  const urlLoginBackend = useSelector(createBackendUrl(`login/google-login`))

  const { signIn } = useGoogleLogin({
    clientId: clientId,
    jsSrc: `https://apis.google.com/js/api.js`,
    isSignedIn: true,

    onSuccess: (googleUser) => {
      var id_token = googleUser.getAuthResponse().id_token

      dispatch(googleUserLogin({
        url: urlLoginBackend,
        payload: id_token
      }))

      var profile = googleUser.getBasicProfile();
      dispatch(setUserProfilePictureUrl(profile.getImageUrl()))
    },

    onFailure: () => { alert("Cannot log you in. Some problem at the server.") }
  })

  return signIn
}