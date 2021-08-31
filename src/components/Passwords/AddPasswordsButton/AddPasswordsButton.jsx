import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPasswordsCount } from "../../../redux/passwordsSlice";
import PasswordsInputBox from "../ShowPasswords/Form/PasswordsInputBox";

export default function AddPasswordsButton() {

  const dispatch = useDispatch()
  const passwordsCount = useSelector(state => state.passwords.passwordsCount)
  const [newInput, setNewInput] = useState(false)


  const onClick = () => {
    setNewInput(true)
    dispatch(setPasswordsCount(passwordsCount+1))
  }

  const button = 
  <>
    <Row className="mt-4 mt-md-5 justify-content-center" xs={3}>
      <Col md={3}>
        <Button className="add-password" onClick={onClick}>+</Button>
      </Col>
    </Row>
  </>

  useEffect(() => {}, [passwordsCount])

  return (
    <>
      {
        newInput ?
          <>
            <PasswordsInputBox 
              domain="" 
              password="" 
              isNewInput="true" 
              setNewInput={setNewInput}
            />
          </>
        :
        <>
          {
            passwordsCount < 5 ?
              button
            :
              null
          }
        </>
      }
    </>
  )
}