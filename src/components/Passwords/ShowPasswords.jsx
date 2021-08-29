import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import PasswordsRequest from "./PasswordsRequest"
import TableOrForm from "./PasswordsTable/TableOrForm"


export default function ShowPasswords() {
  
  const canShowPasswords = useSelector(state => state.passwords.canShowPasswords)

  useEffect(() => {}, [canShowPasswords])

  return (
    <>
      {
        canShowPasswords ?
          <TableOrForm />
        :
          <PasswordsRequest />
      }
    </>
  )
}