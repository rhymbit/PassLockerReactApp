import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

export default function PasswordsTable(props) {

  const {
    setEditPasswords,
    theme,
    tableBody
  } = {...props}

  return (
    <Container>
        <Row className="mt-5 mt-md-5 justify-content-center">
          <Button onClick={() => setEditPasswords(true)}>
            Edit Passwords
          </Button>
        </Row>
        <Row className="mt-4 mt-md-4">
          <Table
            striped 
            bordered 
            hover 
            responsive 
            variant={theme}
          >
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
    </Container>
  )
}