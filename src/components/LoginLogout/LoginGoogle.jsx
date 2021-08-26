import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useGoogleLogin } from "react-google-login"
import { googleUserLogin, setUserProfilePictureUrl } from "../../redux//userSlice"
import googleIcon from "../../icons/google.svg"
import { Redirect } from 'react-router-dom';
import { Dropdown } from "react-bootstrap"


export default function LoginGoogle() {
  const signIn = useLogin()

  const isNewUser = useSelector(state => state.user.isNewUser)
  
  useEffect(() => {}, [isNewUser])

  return (
    <>
      {
        isNewUser ?
          <Redirect to="/new-user" />
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
  const clientId = useSelector(state => state.user.googleClientId)
  const urlLoginBackend = useSelector(state => state.user.googleLoginUrl)

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

    onFailure: () => { console.log("Unable to login google user") }
  })

  return signIn
}