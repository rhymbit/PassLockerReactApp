import React, { useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPasswordsCount } from "../../../../redux/passwordsSlice";

export default function PasswordsTable() {

  const dispatch = useDispatch()
  const theme = useSelector(state => state.app.theme)
  const userPasswords = useSelector(state => state.passwords.userPasswords)

  // domain names in an array
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

  useEffect(() => {
    dispatch(setPasswordsCount(Object.keys(userPasswords).length))
  } ,[userPasswords])

  return (
    <Row className="mt-4 mt-md-4">
      <Table variant={theme} striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Domain</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </Row>
  )
}