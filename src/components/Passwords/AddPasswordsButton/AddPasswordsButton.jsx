import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPasswordsCount } from "../../../redux/passwordsSlice";
import PasswordsInputBox from "../ShowPasswords/Form/PasswordsInputBox";

export default function AddPasswordsButton() {

  const dispatch = useDispatch()
  const passwordsCount = useSelector(state => state.passwords.passwordsCount)
  const noOfPasswordsAllowed = useSelector(state => state.passwords.noOfPasswordsAllowed)
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
            passwordsCount < noOfPasswordsAllowed ?
              button
            :
              null
          }
        </>
      }
    </>
  )
}