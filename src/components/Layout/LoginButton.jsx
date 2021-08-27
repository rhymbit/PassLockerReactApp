import React from "react"
import { Dropdown } from "react-bootstrap"
import LoginGoogle from "../LoginLogout/LoginGoogle"
import loginIcon from "../../icons/login.ico"

export default function LoginButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        <img
          alt="LoginIcon"
          src={loginIcon}
          width={23}
          height={23}
        />{' '}
        Login
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
      
          <LoginGoogle />
        
      </Dropdown.Menu>
    </Dropdown>
  )
}