import React from "react"
import { Dropdown, NavDropdown } from "react-bootstrap"

export default function Themes() {

  const onClick = () => {
    console.log("Light button clicked")
    let r = document.querySelector(':root')
    r.style.setProperty('--gray6', '#a82dd1')
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        Themes
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item id="light" onClick={onClick} href="#">Light</Dropdown.Item>
        <Dropdown.Item id="dark" href="/">Dark</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}