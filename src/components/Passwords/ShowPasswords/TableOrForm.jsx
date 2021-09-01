import React, { useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import PasswordsEditForm from "./Form/PasswordsEditForm"
import PasswordsTable from "./Table/PasswordsTable"

export default function TableOrForm() {

  const [editPasswords, setEditPasswords] = useState(false)

  const dispatch = useDispatch()  
    
  useEffect(() => {
  }, [editPasswords])

  return (
    <>
      {
        editPasswords ?
          <PasswordsEditForm 
            setEditPasswords={setEditPasswords}
          />
        :
        <Container>
          <Row className="mt-4 mt-md-4 justify-content-center">
            <Button onClick={() => setEditPasswords(true)}>
              Edit Passwords
            </Button>
          </Row>

          <PasswordsTable />

        </Container>
      }
    </>
  )
}