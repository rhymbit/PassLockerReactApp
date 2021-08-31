import React, { useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setPasswordsCount } from "../../../redux/passwordsSlice"
import PasswordsEditForm from "./Form/PasswordsEditForm"
import PasswordsTable from "./Table/PasswordsTable"

export default function TableOrForm() {

  const dispatch = useDispatch()
  const [editPasswords, setEditPasswords] = useState(false)
  const userPasswords = useSelector(state => state.passwords.userPasswords)

  // domain names in an array
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
        <Container>

          <Row className="mt-4 mt-md-4 justify-content-center">
            <Button onClick={() => setEditPasswords(true)}>
              Edit Passwords
            </Button>
          </Row>

          <PasswordsTable tableBody={tableBody} />

        </Container>
      }
    </>
  )
}