import React from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet-async';
import { createVerificationUrl, verifyUser } from "../../redux/passwordsSlice";
import { useEffect } from "react";


export default function VerifyUserForm() {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const dispatch = useDispatch()
  const verifyUserUrl = useSelector(createVerificationUrl(`verify-user`))

  const userCredentialsWrong = useSelector(state => state.passwords.userCredentialsWrong)

  const onSubmit = (data) => {
    const credentials = {
      password: data.password,
      secret: data.secret
    }

    dispatch(verifyUser({
      url: verifyUserUrl, payload: credentials
    }))
  }

  useEffect(() => {}, [userCredentialsWrong])

  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href={`/css/reactform.css`} />
      </Helmet>


      <form onSubmit={handleSubmit(onSubmit)}>
        {
          userCredentialsWrong ?
            <h2>Entered Details are incorrect</h2>
          :
            <h2>Please First Verify Yourself</h2>
        }

        <div>
          <label>Password</label>
          <input {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        
        <div>
          <label>Secret</label>
          <input {...register("secret")} />
          {errors.secret && <p>{errors.secret.message}</p>}
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </>
  )
}


const schema = yup.object().shape({
  password: yup.string().required().min(8).max(20).matches(/^[A-Z]+[a-z]+[0-9|@|#|$|&|%]+[a-z|A-Z|0-9|@#$%&]*$/,
        `Must start with a capital letter followed by small letter. 
          Must contain at least one digit or special character chosen from '@#$%&'. 
          Min Length 8, Max length 20.`),
   secret: yup.string().required(),
})