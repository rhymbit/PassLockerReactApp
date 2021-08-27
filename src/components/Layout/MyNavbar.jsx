import React, { useState } from "react"
import { Col, Container, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import brandIcon from "../../icons/brandIcon.ico"
import About from "../About/About"
import LoggedIn from "./LoggedIn"
import LoginButton from "./LoginButton"
import Themes from "./Themes"

export default function MyNavbar() {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  // state for `About` modal
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              alt="brand-icon"
              src={brandIcon}
              width={30}
              height={30}
              className="d-inline-block align-top"
              />{' '}
              PassLocker
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse>
            <Col xs={12} md={1}>
              <Nav>
                <Link className="nav-link" to="/">Home</Link>
              </Nav>
            </Col>

            <Col xs={12} md={3}>
              <Nav>
                <Nav.Link onClick={() => setModalShow(true)}>About</Nav.Link>
              </Nav>
                <About show={modalShow} onHide={() => setModalShow(false)}/>
            </Col>
            
            <Col xs={12} md={isLoggedIn ? 3 : 5}>
              <Nav>
                <Themes />
              </Nav>
            </Col>

            <Col xs={12} md={5}>
              {
                isLoggedIn ?
                <LoggedIn />
                :
                <LoginButton />
              }
            </Col>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}