import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import post from "../js/post"
import deleteFunc from "../js/delete"

const apiUrl = `https://localhost:5001/api`

const initialState = {
  googleClientId: `511938303606-cgsinc6m12udh4mtj5bdmva3l4at3i7v.apps.googleusercontent.com`,
  googleLoginUrl: `${apiUrl}/login/google-login`,
  createUserUrl: `${apiUrl}/user/create-user`,
  deleteUserUrl: `${apiUrl}/user/delete-user`,
  userId: null,
  username: null,
  gender: null,
  userData: null,
  isConfirmed: null,
  isNewUser: null,
  isLoggedIn: false,
  isGoogleLoggedIn: false,
  profilePictureUrl: null,
}

const createUserControllerUrl = endpoint => state => {
  const { userId } = state.user
  return `${apiUrl}/${userId}/${endpoint}`
}

const googleUserLogin = createAsyncThunk('user/googleUserLogin',
    ({ url, payload }) => {
      return post(url, payload)
  })

const createUser = createAsyncThunk('user/createUser',
    ({url, payload}) => {
      return post(url, payload)
  })

const deleteUser = createAsyncThunk('user/deleteUser',
  ({url, payload}) => {
    try {
      const data = deleteFunc(url, payload)
      return data
    } catch (err) {
      return isRejectedWithValue(err)
    }
  })

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUserData(state, action) {
      state.userData = action.payload
    },

    setUserConfirmed(state, action) {
      state.isConfirmed = action.payload
    },

    setUserIsNewUser(state, action) {
      state.isNewUser = action.payload
    },

    setUserIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload
    },

    setUserIsGoogleLoggedIn(state, action) {
      state.isGoogleLoggedIn = action.payload
    },

    setUserProfilePictureUrl(state, action) {
      state.profilePictureUrl = action.payload
    },
  },

  extraReducers: builder => {
    builder
      .addCase(googleUserLogin.pending, (state, action) => {})

      .addCase(googleUserLogin.fulfilled, (state, action) => {
        // a new user, visiting site for the first time
        if (Number(action.payload.userId) === 0) {
          state.isNewUser = true
          state.isConfirmed = false
          state.isLoggedIn = false
        } 
        // already registered user
        else {
          state.isNewUser = false
          state.username = action.payload.userName
          state.gender = action.payload.gender
          state.isLoggedIn = true
          state.isConfirmed = action.payload.isConfirmed
          state.isGoogleLoggedIn =true
        }
        state.userData = action.payload
        state.userId = action.payload.userId
      })

      .addCase(createUser.pending, (state, action) => {
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.userData = action.payload
        state.userId = action.payload.userId
        state.username = action.payload.userName
        state.isConfirmed = action.payload.isConfirmed
        state.gender = action.payload.gender
        state.isNewUser = false
        state.isLoggedIn = true
        state.isGoogleLoggedIn =true
      })
      
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log("User Deleted Successfully")
      })
      .addCase(deleteUser.rejected, (state, action) => {
        console.log("Cannot delete user, some shit wrong at backend")
        console.log(action.payload)
      })

      
  }
})

export default userSlice.reducer

export const { 
  setUserData, 
  setUserConfirmed, 
  setUserIsNewUser, 
  setUserIsLoggedIn,
  setUserIsGoogleLoggedIn,
  setUserProfilePictureUrl,
} = userSlice.actions

export { 
  createUserControllerUrl,
  googleUserLogin, 
  createUser, 
  deleteUser,
}
