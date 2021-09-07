import React from "react"
import { useSelector } from "react-redux"
import { createPasswordControllerUrl } from "../../redux/passwordsSlice"
import VerifyUserForm from "../Forms/VerifyUserForm"

export default function VerifyUser(props) {

  const userId = useSelector(state => state.user.userId)
  const verifyUserUrl = useSelector(createPasswordControllerUrl(`${userId}/verify-user`))

  return (
    <VerifyUserForm 
      url={verifyUserUrl}
      onUserVerified={props.onUserVerified}
    />
  )
}