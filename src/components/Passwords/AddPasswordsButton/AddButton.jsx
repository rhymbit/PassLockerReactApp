import React from "react"
import { useEffect } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setPasswordsCount } from "../../../redux/passwordsSlice"

export default function AddButton(props) {

  const dispatch = useDispatch()
  const passwordsCount = useSelector(state => state.passwords.passwordsCount)
  
  const { setNewInput } = { ...props }

  const onClick = () => {
    setNewInput(true)
    dispatch(setPasswordsCount(passwordsCount+1))
  }

  useEffect(() => {
    let addButton = document.querySelector(`.add-password`)
    passwordsCount > 5 ? addButton.setAttribute(`disabled`, "") 
      : addButton.removeAttribute(`disabled`)
  }, [passwordsCount])

  return (
    <Row className="mt-4 mt-md-5 justify-content-center" xs={3}>
      <Col md={3}>
        <Button
          variant="primary" 
          className="add-password"
          onClick={onClick}
        >+</Button>
      </Col>
    </Row>  
  )
}