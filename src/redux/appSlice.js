import { createSlice } from "@reduxjs/toolkit"

const apiUrl = `https://localhost:5001/api`

const initialState = {
  theme: `dark`,
  googleClientId: `511938303606-cgsinc6m12udh4mtj5bdmva3l4at3i7v.apps.googleusercontent.com`,
}

const createBackendUrl =  endpoint => state => {
  return `${apiUrl}/${endpoint}`
}

const appSlice = createSlice({
  name: `app`,
  initialState,
  reducers: {

    setAppTheme(state, action) {
      state.theme = action.payload
    },
  }
})


export default appSlice.reducer

export const {
  setAppTheme,
} = appSlice.actions

export {
  createBackendUrl,
}
