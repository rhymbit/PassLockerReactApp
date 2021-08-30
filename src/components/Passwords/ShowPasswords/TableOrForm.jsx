import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PasswordsForm from "../PasswordsForm/PasswordsEditForm"
import PasswordsTable from "../PasswordsTable/PasswordsTable"

export default function TableOrForm() {

  const [editPasswords, setEditPasswords] = useState(false)

  const theme = useSelector(state => state.app.theme)

  const userPasswords = useSelector(state => state.passwords.userPasswords)

  const domainNames = Object.keys(userPasswords)

  const tableBody = domainNames.map((domain, index) => {
    return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{domain}</td>
          <td>{userPasswords[domain]}</td>
        </tr>
      )
    })
  
  useEffect(() => {}, [userPasswords, editPasswords])

  return (
    <>
      {
        editPasswords ?
          <PasswordsForm 
            userPasswords={userPasswords}
            setEditPasswords={setEditPasswords}
          />
        :
          <PasswordsTable
            setEditPasswords={setEditPasswords} 
            theme={theme} 
            tableBody={tableBody} 
          />
      }
    </>
  )
}