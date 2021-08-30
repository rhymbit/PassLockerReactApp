import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPasswordsCount } from "../../../redux/passwordsSlice"
import PasswordsEditForm from "../PasswordsForm/PasswordsEditForm"
import PasswordsTable from "../PasswordsTable/PasswordsTable"

export default function TableOrForm() {

  const dispatch = useDispatch()

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
  
  useEffect(() => {
    dispatch(setPasswordsCount(Object.keys(userPasswords).length))
  }, [userPasswords, editPasswords])

  return (
    <>
      {
        editPasswords ?
          <PasswordsEditForm 
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