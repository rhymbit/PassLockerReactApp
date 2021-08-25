import { configureStore } from "@reduxjs/toolkit";
import passwordsSliceReducer from "./passwordsSlice";
import userSliceReducer from "./userSlice";


const store = configureStore({
  reducer: {
    user: userSliceReducer,
    passwords: passwordsSliceReducer,
  }
})

export default store