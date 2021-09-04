import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser } from "../../../redux/userSlice";
import VerifyUserForm from "../../Forms/VerifyUserForm";

export default function DeleteProfileBackend() {
  const userVerified = useSelector(state => state.passwords.userVerified)

  return (
    userVerified ?

    <VerifyUserForm />
  )
}

function useDeleteUser() {
  const dispatch = useDispatch()
  const userDeleteUrl = useSelector(state => state.user.userDeleteUrl)

  const payload = {
    userToken: localStorage.getItem('passwordToken')
  }

  const deleteUserFromBackend = () => {
    dispatch(deleteUser({
      url: userDeleteUrl,
      payload: payload
    }))
  }
}