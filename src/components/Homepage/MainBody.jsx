import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

export default function MainBody() {

  // fetch data from the backend
  const serviceOffered = [
    {
      title: "Personal Profile",
      text: "Fully personalized profile page made just for you"
    },
    {
      title: "Password Store",
      text: "Can store upto 10 passwords or secrets per user"
    },
    {
      title: "Encrypted Data",
      text: "All the data is full encrypted before it's stored"
    },
    {
      title: "Modern Encryption Algorithms",
      text: "We use the latest industry accepted algorithms"
    },
    {
      title: "Google Sign-In",
      text: `You can use your trusted google account to sign-up and sign-in
              into your account`
    },
    {
      title: `Help 24 X 7`,
      text: `We always listen to your queries and work hard to provide you
              with best experience`
    },
    {
      title: "Data Purging",
      text: `Get rid of all your data with the press of a single button, 
              like a dooms-day-device`
    },
    {
      title: "Friends Forever",
      text: `Since you've visited my website, you and I are already friends😊
              so just hit me up at one of my social media`
    },
  ]


  var tiles = serviceOffered.map((item, index) => {

    let imageSrc;

    if (index == 4) {
      imageSrc = `/src/icons/google.svg`
    } else {
      imageSrc = `/src/icons/service${index}.svg`
    }

    return (
        <Col key={index} className="my-md-5 my-2" md="auto" xs="auto" >
          <Card
            id={`service-card-${index}`}
            className="services"
          >
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body className="services-text">
              <Card.Text>
                <h3>{item.title}</h3>
                {item.text}
              </Card.Text>
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