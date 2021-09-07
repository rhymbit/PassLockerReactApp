import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { createUser, createUserControllerUrl } from '../../redux/userSlice';
import UserForm from '../Forms/UserForm';

export default function NewUser() {

  const [submit, setSubmit] = useState(false)

  const userData = useSelector(state => state.user.userData)
  const urlCreateUser = useSelector(createUserControllerUrl(`create-user`))

  return (
    <>
      {
        submit ?
          <Redirect to='/' />
        :
          <UserForm 
          userData={userData} 
          url={urlCreateUser}
          onSubmit={createUser}
          setSubmit={setSubmit}
          />
      } 
    </>
  )
}