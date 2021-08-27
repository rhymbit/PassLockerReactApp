import React from "react"
import { Button, Modal } from "react-bootstrap"

export default function About(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          PassLocker
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>PassLocker</h4>
        <p>
          Some stuff about PassLocker.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}