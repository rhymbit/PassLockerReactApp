import React from "react"
import { Container, Row } from "react-bootstrap"
import hayasaka from "../../images/hayasaka.jpg"

export default function ProfileCover() {
  return (
    <Container fluid>
        <img
          alt="ProfileCover"
          src={hayasaka}
          height={400}
        />
    </Container>
  )
}