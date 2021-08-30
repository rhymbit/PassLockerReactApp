import React from "react"
import { Row, Col, Button } from "react-bootstrap"

export default function AddButton(props) {

  const { setNewInput } = { ...props }

  return (
    <Row className="mt-4 mt-md-5 justify-content-center" xs={3}>
      <Col md={3}>
        <Button 
          variant="primary" 
          className="add-password"
          onClick={() => setNewInput(true)}
        >+</Button>
      </Col>
    </Row>  
  )
}