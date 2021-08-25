import React from "react";
import { Card, Nav, Container } from "react-bootstrap";
import instagramIcon from "../../icons/instagram.ico"
import discordIcon from "../../icons/discord.ico"

export default function MyFooter() {
  return (
    <Container fluid>

    <Card
      id="footer"
      bg="light"
      text="dark"
      transition="transition"
    >
      <Card.Header>About me 👋</Card.Header>

      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link 
            href="https://www.instagram.com/prateekator/"
          >
          <img
            alt="Instagram Icon"
            src={instagramIcon}
            width={23}
            height={23}
            className="d-inline-block align-top"
          />{' '}
            my instagram
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link 
            href="https://discord.com/login"
          >
          <img
            alt="Discord Icon"
            src={discordIcon}
            width={23}
            height={23}
            className="d-inline-block align-top"
          />{' '}
            find me on Discord at acceleratoꭆ#5772
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I'm just a regular person, who loves to build stuff, either using code, or
            some other way. I'm an engineer at heart 🙂.
          </p>

          <footer className="blockquote-footer">
            Site created and maintained by <cite title="Source Title">Prateek Parashar</cite>
          </footer>

        </blockquote>

      </Card.Body>
    </Card>
    </Container>
  )
}