import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import { createPasswordControllerUrl, setPasswordsUserId, verifyUser } from "../../redux/passwordsSlice";


export default function VerifyUserForm(props) {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  
  const dispatch = useDispatch()

  const userId = useSelector(state => state.user.userId)
  dispatch(setPasswordsUserId(userId))

  const verifyUserUrl = useSelector(createPasswordControllerUrl(`verify-user`))

  const userCredentialsWrong = useSelector(state => state.passwords.userCredentialsWrong)

  const onSubmit = (formData) => {
    const credentials = {
      password: formData.password,
      secret: formData.secret
    }

    const dispatchOptions = 
      props.setState ?
        {
          url: verifyUserUrl,
          payload: credentials,
          setState: props.setState,
          state: props.state
        }
      :
        {
          url: verifyUserUrl,
          payload: credentials
        }

    dispatch(verifyUser(dispatchOptions))
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
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        
        <div>
          <label>Secret Question</label>
          <select {...register("secret")} >
            <option value="">Your first pet?</option>
            <option value="">Your birthplace?</option>
            <option value="">Your favorite food?</option>
            <option value="">Your favorite TV show?</option>
          </select>
          
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