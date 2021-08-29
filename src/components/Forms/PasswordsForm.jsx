import React from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import trashCan from "../../icons/trashcan.svg"

export default function(props) {

  const {
    passwords,
    setEditPasswords
  } = {...props}

  return (
    <Form>
      <Container>
        <Row className="mt-5 mt-md-5 justify-content-center">

          <Col xs={5} md={3}>
            <Form.Control defaultValue="First Name" />
          </Col>
          <Col xs={5} md={3}>
            <Form.Control defaultValue="Last Name" />
          </Col>
          <Col xs={2} md={1}>
            <Button variant="danger" onClick={() => console.log("trash-can")}>
              <img
                alt="TrashCan"
                src={trashCan}
                width={25} height={25}
              />
            </Button>
          </Col>

        </Row>

        <Row className="mt-4 mt-md-5 justify-content-center">
          <Button variant="success" onClick={() => setEditPasswords(false)}>
            Submit
          </Button>
        </Row>
      </Container>
    </Form>
  )
}