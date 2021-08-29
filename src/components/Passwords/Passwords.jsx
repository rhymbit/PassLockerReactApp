import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPasswordsUserId, setTokenFound } from "../../redux/passwordsSlice"
import VerifyUserForm from "../Forms/VerifyUserForm"
import ShowPasswords from "./ShowPasswords"
import VerifyToken from "./VerifyToken"
import MyNavbar from "../Layout/MyNavbar"

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
                <VerifyToken passwordToken={passwordToken}/>
              :
                <VerifyUserForm />
            }
          </>
      }
    </>
  )
}

function useSetPasswordsUserId() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.userId)
  if (userId != null) {
    dispatch(setPasswordsUserId(userId))
  }
}