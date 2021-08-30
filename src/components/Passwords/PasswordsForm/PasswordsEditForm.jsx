import React from "react"
import { useState } from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import trashCan from "../../../icons/trashcan.svg"
import AddPasswordsButton from "../AddPasswordsButton/AddPasswordsButton"
import PasswordsInputBox from "./PasswordsInputBox"

export default function PasswordsEditForm(props) {

  const [data, setData] = useState({
    abc: "123"
  })

  const {
    userPasswords,
    setEditPasswords
  } = {...props}

  const domainNames = Object.keys(userPasswords)

  const handleSubmit = (e) => {
    e.preventDefault();
    let domainNames = document.querySelectorAll(`input[domain]`)
    domainNames.forEach(element => {
      console.log(element.value)
    });
  }

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