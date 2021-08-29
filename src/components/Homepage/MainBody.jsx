import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import instagramLogo from "../../icons/twitter.svg"

export default function MainBody() {

  // fetch data from the backend
  const serviceOffered = [
    {
      title: "Service 1",
      text: "Some text"
    },
    {
      title: "Service 2",
      text: "Some text"
    },
    {
      title: "Service 3",
      text: "Some text"
    },
    {
      title: "Service 4",
      text: "Some text"
    },
    {
      title: "Service 5",
      text: "Some text"
    },
    {
      title: "Service 6",
      text: "Some text"
    },
    {
      title: "Service 7",
      text: "Some text"
    },
    {
      title: "Service 8",
      text: "Some text"
    },
  ]


  var tiles = serviceOffered.map((item, index) => {
    return (
        <Col key={index} className="my-md-5 my-2" md="auto" xs="auto">
          <Card
            id={`service-card-${index}`}
            className="services"
          >
            <Card.Img variant="top" src={instagramLogo} />
            <Card.Body className="services-text">
              <Card.Text>Something</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    )
  })

  return (
    <Container>
      <Row className="justify-content-center">
        {tiles}
      </Row>
    </Container>
  )
}