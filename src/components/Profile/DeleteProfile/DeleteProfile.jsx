import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { verifyUser, deleteProfile } from "../../../redux/userSlice"
import { createUserControllerUrl } from "../../../redux/userSlice"
import VerifyUserForm from "../../Forms/VerifyUserForm"
import { useDeletePasswords, useLogout } from "../../LoginLogout/Logout"

export default function DeleteProfile() {

  const canDeleteProfile = useSelector(state => state.user.canDeleteProfile)

  const deleteProfile = useDeleteProfile()
  const logout = useLogout()
  const deletePasswords = useDeletePasswords()

  useEffect(() => {}, [canDeleteProfile])

  return (
    <>
      {
        canDeleteProfile ?
        <>
          {deletePasswords()}
          {deleteProfile()}
          {logout()}
          <Redirect to='/' />
        </>
      :
        <VerifyUserForm onUserVerified={verifyUser}/>
      }
    </>
  )
}

function useDeleteProfile() {
  const dispatch = useDispatch()

  const deleteProfileUrlWithoutToken = useSelector(createUserControllerUrl(`delete-user`))
  const deleteProfileUrlWithToken =
    `${deleteProfileUrlWithoutToken}?token=${localStorage.getItem('verificationToken')}`

  const onDelete = () => {
    dispatch(deleteProfile({
      url: deleteProfileUrlWithToken
    }))
  }
  return onDelete
}