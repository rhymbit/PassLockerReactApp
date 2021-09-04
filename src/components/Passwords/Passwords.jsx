import React, { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createVerificationUrl, setPasswordsUserId, setTokenFound, verifyPasswordToken } from "../../redux/passwordsSlice"
import VerifyUserForm from "../Forms/VerifyUserForm"
import MyNavbar from "../Layout/MyNavbar"
import ShowPasswords from "./ShowPasswords/ShowPasswords"

export default function Passwords() {
  // set the userId in passwords slice,
  // which is required to create verification url's
  useSetPasswordsUserId()

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
  const verifyTokenUrl = useSelector(createVerificationUrl(`verify-token`))

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

function useSetPasswordsUserId() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.userId)
  if (userId != null) {
    dispatch(setPasswordsUserId(userId))
  }
}