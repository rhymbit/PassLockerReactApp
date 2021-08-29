import React from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createVerificationUrl, getPasswords, postPasswords } from "../../redux/passwordsSlice";

export default function PasswordsRequest(props) {

  const dispatch = useDispatch()
  let passwordsBackendUrl;

  if (props.method === `post`) {

    passwordsBackendUrl = useSelector(createVerificationUrl(`create-passwords`))
    dispatch(postPasswords({
      url: passwordsBackendUrl,
      payload: props.payload
    }))

  } else {
    passwordsBackendUrl = useSelector(createVerificationUrl(`get-passwords`))
    dispatch(getPasswords({ url: passwordsBackendUrl }))
  }

  return (
    <Spinner animation="border" />
  )
}