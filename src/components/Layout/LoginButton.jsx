import React from "react"
import { Dropdown } from "react-bootstrap"
import LoginGoogle from "../LoginLogout/LoginGoogle"

export default function LoginButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        Login
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
          <LoginGoogle />    
      </Dropdown.Menu>
    </Dropdown>
  )
}