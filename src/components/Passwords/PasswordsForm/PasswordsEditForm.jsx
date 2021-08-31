import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createVerificationUrl, postPasswords, setUserPasswords } from "../../../redux/passwordsSlice"
import AddPasswordsButton from "../AddPasswordsButton/AddPasswordsButton"
import PasswordsInputBox from "./InputBox/PasswordsInputBox"

export default function PasswordsEditForm(props) {

  const dispatch = useDispatch()

  const {
    userPasswords,
    setEditPasswords
  } = {...props}

  const domainNames = Object.keys(userPasswords)

  const handleSubmit = useOnSubmit(setEditPasswords)

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        
        {
          domainNames.map((domain, index) =>
            <PasswordsInputBox key={index} domain={domain} password={userPasswords[domain]} />  
          )
        }

        <AddPasswordsButton />

        <Row className="submit-cancel-button-row" xs={3}>
          <Col className="mt-4">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Col>

          <Col className="mt-4">
            <Button variant="danger" onClick={() => setEditPasswords(false)}>
              Cancel
            </Button>
          </Col>
        </Row>

      </Container>
    </Form>
  )
}

function useOnSubmit(setEditPasswords) {
  const dispatch = useDispatch()
  const passwordCreateBackendUrl = useSelector(createVerificationUrl(`create-passwords`))
  console.log(passwordCreateBackendUrl)

  const onSubmit = (e) => {
    e.preventDefault()

    const domainNames = document.querySelectorAll(`input[domain]`)
    const passwords = document.querySelectorAll(`input[password]`)

    let payload = {}

    for (let i = 0; i < domainNames.length; i++) {
      payload[domainNames[i].value] = passwords[i].value
    }

    dispatch(setUserPasswords(payload))
    setEditPasswords(false)

    dispatch(postPasswords({
      url: passwordCreateBackendUrl,
      payload: payload
    }))
  }

  return onSubmit
}