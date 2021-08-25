import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import brandIcon from "../../icons/brandIcon.ico"


export default function MyNavbar(props) {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg" id="navbar">
      <Container>

        <Navbar.Brand href="/">
          <img
            alt="brand-icon"
            src={brandIcon}
            width={30}
            height={30}
            className="d-inline-block align-top"
          />{' '}
            PassLocker
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link id="dark">Dark</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link id="light">Light</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link id="solar">Solarize</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>

  </>
  )
}