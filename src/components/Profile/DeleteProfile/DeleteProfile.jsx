import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setUserVerified } from "../../../redux/passwordsSlice"
import DeleteProfileBackend from "./DeleteProfileBackend"

export default function DeleteProfile() {

  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false)

  const onClick = useDeleteButtonClick(setDeleteButtonClicked)

  return (
    deleteButtonClicked ?
      <DeleteProfileBackend />
    :
      <Button variant="danger" onClick={onClick}>Delete Profile</Button>
  )
}

function useDeleteButtonClick(setDeleteButtonClicked) {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(setUserVerified(false))
    setDeleteButtonClicked(true)
  }

  return onClick
}
