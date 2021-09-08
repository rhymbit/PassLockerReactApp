import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { createUserControllerUrl, updateUser, verifyUser } from "../../../redux/userSlice"
import UserForm from "../../Forms/UserForm"
import VerifyUser from "../../VerifyUser/VerifyUser"

export default function EditProfile() {

  const canEditProfile = useSelector(state => state.user.canEditProfile)
  const [submit, setSubmit] = useState(false)

  const userData = useSelector(state => state.user.userData)

  const urlUpdateUserWithoutToken = useSelector(createUserControllerUrl(`update-user`))

  let urlUpdateUserWithToken = 
    `${urlUpdateUserWithoutToken}?token=${localStorage.getItem('verificationToken')}`
  
  useEffect(() => {
  }, [canEditProfile])

  return (
    <>
      {
        canEditProfile ?
        <>
          {
            submit ?
              <Redirect to='/' />
            :
              <UserForm
                url={urlUpdateUserWithToken}
                userData={userData}
                onSubmit={updateUser}
                setSubmit={setSubmit}
              />
          }
        </>
        :
          <VerifyUser onUserVerified={verifyUser}/>
      }
    </>
  )
}
