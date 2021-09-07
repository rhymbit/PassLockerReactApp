import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import get from "../js/get"
import post from "../js/post"

const apiUrl = `https://localhost:5001/api/password`

const initialState = {
  userId: null,
  tokenFound: false,
  userVerified: false,
  userCredentialsWrong: false,
  userPasswords: null,
  passwordsCount: 0,
  passwordsAvailable: false,
  noOfPasswordsAllowed: 10,
}

const createPasswordControllerUrl = endpoint => state => {
  const { userId } = state.passwords
  return userId ? `${apiUrl}/${userId}/${endpoint}` : `${apiUrl}/${endpoint}`
}

const verifyUser = createAsyncThunk('passwords/verifyUser',
    ({ url, payload }) => {
      try {
        const data = post(url, payload)
        return data
      } catch (err) {
        return isRejectedWithValue(err)
      }
  })

const verifyPasswordToken = createAsyncThunk('passwords/verifyToken',
    ({ url, payload }) => {
      try {
        const data = post(url, payload)
        return data
      } catch (err) {
        return isRejectedWithValue(err)
      }
  })

const getPasswords = createAsyncThunk('passwords/getPasswords',
    ({ url }) => { 
      try {
        const data = get(url)
        return data
      } catch (err) {
        return isRejectedWithValue(err)
      }
     })

const postPasswords = createAsyncThunk(`passwords/createPasswords`,
    ({ url, payload }) => {
      try {
        const success = post(url, payload)
        return success
      } catch (err) {
        return isRejectedWithValue(err)
      }
    })


const passwordsSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {

    setPasswordsUserId(state, action) {
      state.userId = action.payload
    },

    setTokenFound(state, action) {
      state.tokenFound = action.payload
    },

    setTokenVerified(state, action) {
      state.tokenVerified = action.payload
    }, 

    setUserVerified(state, action) {
      state.userVerified = action.payload
    }, 

    setUserCredentialsWrong(state, action) {
      state.userCredentialsWrong = action.payload
    }, 

    setUserPasswords(state, action) {
      state.userPasswords = action.payload
    }, 

    setPasswordsCount(state, action) {
      state.passwordsCount = action.payload
    },

    setPasswordsAvailable(state, action) {
      state.passwordsAvailable = action.payload
    }
  },

  extraReducers: builder => {
    builder

      .addCase(verifyUser.fulfilled, (state, action) =>{
        localStorage.setItem(`verificationToken`, action.payload)
        state.userVerified = true
        state.userCredentialsWrong = false
      })

      .addCase(verifyUser.rejected, (state, action) => {
        state.userCredentialsWrong = true
      })

      .addCase(verifyPasswordToken.fulfilled, (state, action) => {
        state.userVerified = true
      })

      .addCase(verifyPasswordToken.rejected, (state, action) => {
        state.tokenFound = false
        localStorage.removeItem(`verificationToken`)
      })

      .addCase(getPasswords.fulfilled, (state, action) => {
        state.userPasswords = action.payload
        state.passwordsCount = Object.keys(action.payload).length
        state.passwordsAvailable = true
      })

      .addCase(getPasswords.rejected, (state, action) => {
      })

      .addCase(postPasswords.fulfilled, (state, action) => {
        state.canShowPasswords = true
      })

      .addCase(postPasswords.rejected, (state, action) => {
      })
  }
})


export default passwordsSlice.reducer

export const {
  setPasswordsUserId,
  setTokenFound,
  setTokenVerified,
  setUserVerified,
  setUserCredentialsWrong,
  setUserPasswords,
  setPasswordsCount,
  setPasswordsAvailable,
} = passwordsSlice.actions

export {
  createPasswordControllerUrl,
  verifyUser,
  verifyPasswordToken,
  getPasswords,
  postPasswords,
}
