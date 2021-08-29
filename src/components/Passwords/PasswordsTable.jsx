import React from "react"
import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function PasswordsTable() {

  const theme = useSelector(state => state.app.theme)

  const userPasswords = useSelector(state => state.passwords.userPasswords)

  const domainNames = Object.keys(userPasswords)

  const tableBody = domainNames.map((domain, index) => {
    return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{domain}</td>
          <td>{userPasswords[domain]}</td>
        </tr>
      )
    })

  return (
    <Table striped bordered hover responsive
      variant={theme}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Domain Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </Table>
  )
}