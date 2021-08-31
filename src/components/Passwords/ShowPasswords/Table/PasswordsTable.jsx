import React , { useEffect } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PasswordsTable(props) {

  let theme = useSelector(state => state.app.theme)

  return (
    <>
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
              {props.tableBody}
            </tbody>
          </Table>
        </Row>
    </>
  )
}