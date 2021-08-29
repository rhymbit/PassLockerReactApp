import React from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createVerificationUrl, verifyPasswordToken } from "../../redux/passwordsSlice";

export default function VerifyToken(props) {

  const dispatch = useDispatch()

  const passwordToken = props.passwordToken;
  const verifyTokenUrl = useSelector(createVerificationUrl(`verify-token`));

  dispatch(verifyPasswordToken({
    url: verifyTokenUrl,
    payload: {
      googleToken: ``,
      passwordToken: passwordToken
    }
  }))

  return(
    <Spinner animation="border" />
  )
}