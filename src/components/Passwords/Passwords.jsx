import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createVerificationUrl, getPasswords } from "../../redux/passwordsSlice"

export default function Passwords() {

  const passwords = useSelector(state => state.passwords.passwords)
  const isPasswordNull = useSelector(state => state.passwords.isPasswordNull)

  const passwordsUrl = useSelector(createVerificationUrl(`get-passwords`))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPasswords({ url: passwordsUrl }))
  }, [isPasswordNull])

  return (
    <>
      {
        isPasswordNull ?
          <h1>Passwords are coming</h1>
        :
          <h1>Passwords are here</h1>
      }
    </>
  )
}