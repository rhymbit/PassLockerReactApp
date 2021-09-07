import React, { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createPasswordControllerUrl, setTokenFound, verifyPasswordToken, verifyUser } from "../../redux/passwordsSlice"
import MyNavbar from "../Layout/MyNavbar"
import VerifyUser from "../VerifyUser/VerifyUser"
import ShowPasswords from "./ShowPasswords/ShowPasswords"

export default function Passwords() {

  const dispatch = useDispatch()

  // checking to see if token exists
  const passwordToken = localStorage.getItem(`verificationToken`)

  if (passwordToken != null) {
    dispatch(setTokenFound(true))
  }

  const userVerified = useSelector(state => state.passwords.userVerified)
  const tokenFound = useSelector(state => state.passwords.tokenFound)

  const verifyToken = useVerifyToken()

  useEffect(() => {
  }, [userVerified, tokenFound])

  return (
    <>

      <MyNavbar />

      {
        userVerified ?
          <ShowPasswords />
        :
          <>
            {
              tokenFound ?
                <>
                  {verifyToken(passwordToken)}
                  <Spinner animation="border" />
                </>
              :
                <VerifyUser onUserVerified={verifyUser}/>
            }
          </>
      }
    </>
  )
}

function useVerifyToken() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.userId)
  const verifyTokenUrl = useSelector(createPasswordControllerUrl(`${userId}/verify-token`))

  const verifyToken = (passwordToken) => {
    dispatch(verifyPasswordToken({
      url: verifyTokenUrl,
      payload: {
        passwordToken: passwordToken
      }
    }))
  }
  return verifyToken
}
