import React, { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createPasswordControllerUrl, setPasswordsUserId, setTokenFound, verifyPasswordToken } from "../../redux/passwordsSlice"
import VerifyUserForm from "../Forms/VerifyUserForm"
import MyNavbar from "../Layout/MyNavbar"
import ShowPasswords from "./ShowPasswords/ShowPasswords"

export default function Passwords() {

  const dispatch = useDispatch()

  // checking to see if token exists
  const passwordToken = localStorage.getItem(`passwordToken`)

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
                <VerifyUserForm />
            }
          </>
      }
    </>
  )
}

function useVerifyToken() {
  const dispatch = useDispatch()
  const verifyTokenUrl = useSelector(createPasswordControllerUrl(`verify-token`))

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
