import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

export default function UserForm(props) {

  const {
    name,
    userEmail,
    username,
    location,
  } = { ...props.userData }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = useOnSubmit()

  const onSubmit = (formData) => {
    formData.email = userEmail
    submitForm(props.url, formData, props.onSubmit)
    props.setSubmit(true)
  }

  return (
    <div>
      {formCss()}

      <Container>
        <h1>Hello {name}. Just need a few more details from you before setting up your profile.</h1>
      </Container>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Username</label>
          <input {...register("username")} defaultValue={username} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

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
          <label>Where do you live?</label>
          <input {...register("location")} defaultValue={location} />
          {errors.location && <p>{errors.location.message}</p>}
        </div>

        <div>
          <label>Gender</label>
          <select {...register("gender")} >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div>
          <label>Your Name</label>
          <input {...register("name")} defaultValue={name} />
        </div>
        <div>
          <label>Your Email</label>
          <input {...register("email")} defaultValue={userEmail} readOnly />
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  )
}

function useOnSubmit() {
  const dispatch = useDispatch()
  const _ = (url, payload, onSubmit) => {
    dispatch(onSubmit({
      url: url,
      payload: payload
    }))
  }
  return _
}

const schema = yup.object().shape({
  username: yup.string().required().min(8).max(20)
    .matches(/^[a-z]+/,
      `Must start with small alphabet. Can contain numbers, but no special characters`),
  password: yup.string().required().min(8).max(20).matches(/^[A-Z]+[a-z]+[0-9|@|#|$|&|%]+[a-z|A-Z|0-9|@#$%&]*$/,
      `Must start with a capital letter followed by small letter. 
     Must contain at least one digit or special character chosen from '@#$%&'. 
     Min Length 8, Max length 20.`),
  secret: yup.string().required(),
  location: yup.string().required().max(10),
  gender: yup.string().required(),
})

function formCss() {
  return (
    <Helmet>
      <link rel="stylesheet" type="text/css" href={`/css/reactform.css`} />
    </Helmet>
  )
}

export {
  formCss
}