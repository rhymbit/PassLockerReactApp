import React from "react"
import { useSelector } from "react-redux"
import { verifyUser } from "../../../redux/userSlice"
import VerifyUser from "../../VerifyUser/VerifyUser"

export default function EditProfile() {

  const canEditProfile = useSelector(state => state.user.canEditProfile)

  return (
    <>
      {
        canEditProfile ?
          <h1>User can edit profile</h1>
        :
          <VerifyUser onUserVerified={verifyUser}/>
      }
    </>
  )
}
