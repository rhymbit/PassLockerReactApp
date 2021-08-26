import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import brandIcon from "../../icons/brandIcon.ico"
import About from "../About/About"
import Logout from "../LoginLogout/Logout"
import LoggedIn from "./LoggedIn"
import LoginButton from "./LoginButton"
import Themes from "./Themes"


export default function MyNavbar() {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

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
          {
            isLoggedIn ?
              <LoggedIn />
            :
              <LoginButton />
          }
        </Navbar.Collapse>

      </Container>
    </Navbar>

  </>
  )
}