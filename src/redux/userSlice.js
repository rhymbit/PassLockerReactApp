import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import post from "../js/post"

const apiUrl = `https://localhost:5001/api`

const initialState = {
  googleClientId: `511938303606-cgsinc6m12udh4mtj5bdmva3l4at3i7v.apps.googleusercontent.com`,
  googleLoginUrl: `${apiUrl}/login/google-login`,
  createUserUrl: `${apiUrl}/user/create-user`,
  userId: null,
  userName: null,
  userData: null,
  isConfirmed: null,
  isNewUser: null,
  isLoggedIn: false,
  isGoogleLoggedIn: false,
  profilePictureUrl: null,
}

const googleUserLogin = createAsyncThunk('user/googleUserLogin',
    ({ url, payload }) => {
      return post(url, payload)
  })

const createUser = createAsyncThunk('user/createUser',
    ({url, payload}) => {
      return post(url, payload)
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
          state.userName = action.payload.userName
          state.isLoggedIn = true
          state.isConfirmed = action.payload.isConfirmed
          state.isGoogleLoggedIn =true
        }
        state.userData = action.payload
        console.log(state.userData)
        state.userId = action.payload.userId
      })

      .addCase(createUser.pending, (state, action) => {
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.userData = action.payload
        state.userName = action.payload.userName
        state.isConfirmed = action.payload.isConfirmed
        state.isNewUser = false
        state.isLoggedIn = true
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

export { googleUserLogin, createUser }
