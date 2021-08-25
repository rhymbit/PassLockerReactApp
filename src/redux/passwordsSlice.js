import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import get from "../js/get"
import post from "../js/post"

const apiUrl = `https://localhost:5001/api/password`

const initialState = {
  userId: null,
  isVerified: false,
  isTokenStored: false,
}

const createVerificationUrl = endPoint => state => {
  const { userId } = state.passwords
  return `${apiUrl}/${userId}/${endPoint}`
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
      return get(url)
    })


const passwordsSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {

    setPasswordsUserId(state, action) {
      state.userId = action.payload
    },

    setPasswordsToken(state, action) {
      state.token = action.payload
    },

    setPasswordsIsVerified(state, action) {
      state.isVerified = action.payload
    }, 

    setIsTokenStored(state, action) {
      state.isTokenStored = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(verifyUser.fulfilled, (state, action) =>{
        if (action.payload) {          
          localStorage.setItem("passwordToken", action.payload)
        }
        state.isVerified = true
      })
      .addCase(verifyPasswordToken.fulfilled, (state, action) => {
        console.log("Token is verified")
        state.isVerified = true
      })
      .addCase(verifyPasswordToken.rejected, (state, action) => {
        console.log("Token has expired")
        state.isTokenStored = false
      })
      .addCase(getPasswords.fulfilled, (state, action) => {
        console.log(action.payload)
      })
  }
})


export default passwordsSlice.reducer

export const {
  setPasswordsToken,
  setPasswordsUserId,
  setIsTokenStored,
} = passwordsSlice.actions

export { 
  createVerificationUrl,
  verifyUser,
  verifyPasswordToken,
  getPasswords }