import React, { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import trashCanIcon from "../../../../icons/trashcan.svg"
import { setPasswordsCount } from "../../../../redux/passwordsSlice"
import AddPasswordsButton from "../../AddPasswordsButton/AddPasswordsButton"

export default function PasswordsInputBox(props) {

  const [trashCan, setTrashCan] = useState(false)

  const { domain, password, isNewInput, setNewInput } = { ...props }

  const deleteButton = useDeleteButton()

  const onDeleteClick = () => {
    setTrashCan(true)
    setNewInput(false)
  }

  useEffect(() => {
    return () => {
      deleteButton()
    }
  }, [])

  const form =
    <>
      <Row className="mt-5 mt-md-5 justify-content-center">
        <Col xs={5} md={3}>
          <Form.Control defaultValue={domain ? domain : ""} domain=""/>
        </Col>
        <Col xs={5} md={3}>
          <Form.Control defaultValue={password ? password : ""} password="" />
          <Form.Text muted>Passwords must be 8-20 characters long</Form.Text>
        </Col>
        <Col xs={2} md={1}>
          <Button variant="danger" onClick={onDeleteClick}>
            <img
              alt="trash-can-icon"
              src={trashCanIcon}
              width={25} height={25}
            />
          </Button>
        </Col>
      </Row>
    </>

  return (
    <>
      {
        trashCan ?
          null
        :
        <>
          {form}
          {
            isNewInput ?
              <AddPasswordsButton />
            :
              null
          }
        </>
      }
    </>
  )
}

function useDeleteButton() {
  const passwordsCount = useSelector(state => state.passwords.passwordsCount)
  const dispatch = useDispatch()
  const deleteB = () => dispatch(setPasswordsCount(passwordsCount-1))
  return deleteB
}