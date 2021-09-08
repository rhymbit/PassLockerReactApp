import React, { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createPasswordControllerUrl, getPasswords } from "../../../redux/passwordsSlice"
import TableOrForm from "./TableOrForm"


export default function ShowPasswords() {
  
  const passwordsAvailable = useSelector(state => state.passwords.passwordsAvailable)

  const getPasswordsFromBackend = useGetPasswords()

  useEffect(() => {

  }, [passwordsAvailable])

  return (
    <>
      {
        passwordsAvailable ?
          <TableOrForm />
        :
          <>
            {getPasswordsFromBackend()}
            <Spinner animation="border" />
          </>
      }
    </>
  )
}

function useGetPasswords() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.userId)

  const getPasswordsUrlWithoutToken = useSelector(createPasswordControllerUrl(`${userId}/get-passwords`))
  
  const getPasswordsUrlWithToken = 
    `${getPasswordsUrlWithoutToken}?token=${localStorage.getItem('verificationToken')}`

  const getPasswordsFromBackend = () => {
    dispatch(getPasswords({ url: getPasswordsUrlWithToken }))
  }

  return getPasswordsFromBackend
}