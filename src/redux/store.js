import { configureStore } from "@reduxjs/toolkit";
import passwordsSliceReducer from "./passwordsSlice";
import userSliceReducer from "./userSlice";
import appSliceReducer from "./appSlice";


const store = configureStore({
  reducer: {
    app: appSliceReducer,
    user: userSliceReducer,
    passwords: passwordsSliceReducer,
  }
})

export default store