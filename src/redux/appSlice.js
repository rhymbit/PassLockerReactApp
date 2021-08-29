import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  theme: `dark`,
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
