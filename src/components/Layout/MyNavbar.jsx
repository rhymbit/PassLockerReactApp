import React, { useState } from "react"
import { Col, Container, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import aboutIcon from "../../icons/about.svg"
import brandIcon from "../../icons/brandIcon.svg"
import homeIcon from "../../icons/home.svg"
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
              {icon(brandIcon, `brand-icon`, 30, 30)}
              PassLocker
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse>

            <Nav>
              <Link className="nav-link" to="/">
              {icon(homeIcon, `home-icon`, 22, 22)}
              Home
              </Link>
            </Nav>

            <Nav>
              <Nav.Link onClick={() => setModalShow(true)}>
              {icon(aboutIcon, `about-icon`, 22, 22)}
                About
              </Nav.Link>
                <About show={modalShow} onHide={() => setModalShow(false)}/>
            </Nav>

            <Col md={2} />
            <Nav>
              <Themes />
            </Nav>
            <Col md={isLoggedIn ? 2 : 4} />

            <Nav>
              {
                isLoggedIn ?
                  <LoggedIn />
                :
                  <LoginButton />
              }
            </Nav>

            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

function icon(src, alt=`Icon`, width=25, height=25, className=`d-inline-block align-top`) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />{` `}
    </>
  )
}