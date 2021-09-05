import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useRouteMatch } from "react-router"
import { Link } from 'react-router-dom'
import MyFooter from "../../Layout/MyFooter"
import MyNavbar from "../../Layout/MyNavbar"

export default function ShowProfile() {

  let match = useRouteMatch()

  const profPicUrl = useSelector(state => state.user.profilePictureUrl)
  const username = useSelector(state => state.user.username)
  const userData = useSelector(state => state.user.userData)
  
  useEffect(() => {

  }, [profPicUrl])

  return (
    <>
      { myNavbar() }

      <Container className="my-4">
        <Row>
          <Col>
            <img
              alt="ProfilePicture"
              src={profPicUrl}
              width={200}
              height={200}
            />
            <br />
            <h3>{userData.name}</h3>
            <h4>{username}</h4>
          </Col>
          <Col>
            <h3>About User</h3>
            <h5>Member since : {userData.memberSince}</h5>
            <h5>Location : {userData.location}</h5>
            <h5>Gender: {userData.gender}</h5>
          </Col>
        </Row>

        <Row>
          <Col className="my-4" md={2}>
            <Link to={`${match.url}/edit-profile`}>
              <Button>Edit Profile</Button>
            </Link>
          </Col>

          <Col className="my-4" md={2}>
            <Link to={`${match.url}/delete-profile`}>
              <Button variant="danger">Delete Profile</Button>
            </Link>
          </Col>
          
        </Row>

      </Container>

      { myFooter() }

      </>
  )
}


function myNavbar() {
  return <MyNavbar />
}

function myFooter() {
  return <MyFooter />
}
