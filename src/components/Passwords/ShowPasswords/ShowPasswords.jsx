import React, { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createVerificationUrl, getPasswords } from "../../../redux/passwordsSlice"
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
  const getPasswordsUrl = useSelector(createVerificationUrl(`get-passwords`))
  console.log(getPasswordsUrl)

  const getPasswordsFromBackend = () => {
    dispatch(getPasswords({ url: getPasswordsUrl }))
  }

  return getPasswordsFromBackend
}