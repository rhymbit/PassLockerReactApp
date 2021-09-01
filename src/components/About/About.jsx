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
          <p>This application let's you store your passwords or any other secrets very securely.</p>
          <p>It encrypts all your secrets before storing it in the database, so even if some
          Ninjas🥷 came into my house and steal my hard drives, your data won't be
          compromised at all because it was all encrypted.</p>
          <p>Although all of my games would be gone😭 </p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}