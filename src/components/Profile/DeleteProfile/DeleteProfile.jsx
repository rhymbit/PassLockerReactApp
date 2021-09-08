import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { createUserControllerUrl, deleteProfile, verifyUser } from "../../../redux/userSlice"
import { useDeletePasswords, useLogout } from "../../LoginLogout/Logout"
import VerifyUser from "../../VerifyUser/VerifyUser"

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
        <VerifyUser onUserVerified={verifyUser} />
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