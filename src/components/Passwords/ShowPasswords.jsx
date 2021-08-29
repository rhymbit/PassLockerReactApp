import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import PasswordsRequest from "./PasswordsRequest"
import PasswordsTable from "./PasswordsTable"


export default function ShowPasswords() {
  
  const canShowPasswords = useSelector(state => state.passwords.canShowPasswords)

  useEffect(() => {}, [canShowPasswords])

  return (
    <>
      {
        canShowPasswords ?
          <PasswordsTable />
        :
          <PasswordsRequest />
      }
    </>
  )
}