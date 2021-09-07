import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import deleteFunc from "../js/delete"
import post from "../js/post"
import update from "../js/update"

const apiUrl = `https://localhost:5001/api/user`

const initialState = {
  userId: null,
  username: null,
  gender: null,
  userData: null,
  isConfirmed: null,

  isNewUser: null,
  isLoggedIn: false,
  isGoogleLoggedIn: false,

  profilePictureUrl: null,

  canDeleteProfile: false,
  canEditProfile: false,
}

const createUserControllerUrl = endpoint => state => {
  const { userId } = state.user
  return userId ? `${apiUrl}/${userId}/${endpoint}` : `${apiUrl}/${endpoint}`
}

const googleUserLogin = createAsyncThunk('user/googleUserLogin',
    ({ url, payload }) => {
      return post(url, payload)
  })

const createUser = createAsyncThunk('user/createUser',
    ({url, payload}) => {
      return post(url, payload)
  })

const verifyUser = createAsyncThunk('users/verifyUser',
  ({ url, payload }) => {
    try {
      const data = post(url, payload)
      return data
    } catch (err) {
      return isRejectedWithValue(err)
    }
  })

const updateUser = createAsyncThunk('user/updateUser',
  ({ url, payload }) => {
    try {   
      const data = update(url, payload)
      return data
    } catch (err) {
      return isRejectedWithValue(err)
    }
  })

const deleteProfile = createAsyncThunk('user/deleteProfile',
  ({ url }) => {
     try{ 
      const data = deleteFunc(url)
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

    setCanDeleteProfile(state, action) {
      state.canDeleteProfile = action.payload
    }
  },

  extraReducers: builder => {
    builder
      .addCase(googleUserLogin.pending, (state, action) => {})

      .addCase(googleUserLogin.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.userData = action.payload
        // a new user, visiting site for the first time
        if (Number(action.payload.userId) === 0) {
          state.isNewUser = true
          state.isConfirmed = false
          state.isLoggedIn = false
        } 
        // already registered user
        else {
          state.isNewUser = false
          state.username = action.payload.username
          state.gender = action.payload.gender
          state.isLoggedIn = true
          state.isConfirmed = action.payload.isConfirmed
          state.isGoogleLoggedIn =true
        }
      })

      .addCase(createUser.pending, (state, action) => {
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.userData = action.payload
        state.userId = action.payload.userId
        state.username = action.payload.username
        state.isConfirmed = action.payload.isConfirmed
        state.gender = action.payload.gender
        state.isNewUser = false
        state.isLoggedIn = true
        state.isGoogleLoggedIn =true
      })

      .addCase(verifyUser.fulfilled, (state, action) => {
        localStorage.setItem(`verificationToken`, action.payload)
        state.canDeleteProfile = true
        state.canEditProfile = true
      })

      .addCase(verifyUser.rejected, (state, action) => {
        console.log("Failed to verify user")
      })

      .addCase(updateUser.fulfilled, (state,action) => {
        console.log(action.payload)
        console.log("User Updated Successfully")
      })
      
      .addCase(deleteProfile.fulfilled, (state, action) => {
        console.log("User Deleted Successfully")
        state.canDeleteProfile = true
      })
      .addCase(deleteProfile.rejected, (state, action) => {
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
  setCanDeleteProfile,
} = userSlice.actions

export {
  createUserControllerUrl,
  googleUserLogin,
  createUser,
  verifyUser,
  updateUser,
  deleteProfile,
}

