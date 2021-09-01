import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import passwordsSliceReducer from "./passwordsSlice";
import userSliceReducer from "./userSlice";


const store = configureStore({
  reducer: {
    app: appSliceReducer,
    user: userSliceReducer,
    passwords: passwordsSliceReducer,
  }
})

export default store