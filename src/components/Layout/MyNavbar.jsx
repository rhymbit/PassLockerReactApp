import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import brandIcon from "../../icons/brandIcon.ico"
import About from "../About/About"
import LoginButton from "./LoginButton"
import Themes from "./Themes"


export default function MyNavbar(props) {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
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
            <About />
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Themes />
        </Navbar.Collapse>

        <Navbar.Collapse>
          <LoginButton />
        </Navbar.Collapse>

      </Container>
    </Navbar>

  </>
  )
}