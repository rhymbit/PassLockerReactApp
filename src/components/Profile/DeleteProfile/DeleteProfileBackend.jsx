import React from "react";
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { createUserControllerUrl, deleteUser } from "../../../redux/userSlice";
import VerifyUserForm from "../../Forms/VerifyUserForm";

export default function DeleteProfileBackend() {
  const userVerified = useSelector(state => state.passwords.userVerified)

  const deleteUser = useDeleteUser()

  return (
    userVerified ?
      <>
          {deleteUser()}
          <Redirect to="/" />
      </>
    :
      <></>
      
  )
}

function useDeleteUser() {
  const dispatch = useDispatch()
  const userDeleteUrlWithoutToken = useSelector(createUserControllerUrl(`delete-user`))
  const userDeleteUrlWithToken =
    `${userDeleteUrlWithoutToken}?token=${localStorage.getItem(`passwordToken`)}`

  const deleteUserFromBackend = () => {
    dispatch(deleteUser({
      url: userDeleteUrlWithToken,
    }))
  }

  return deleteUserFromBackend
}