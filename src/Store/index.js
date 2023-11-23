import { configureStore } from "@reduxjs/toolkit";
import { logIn } from "../Page/LogIn/Login.reducers";

const store = configureStore({
  reducer: { logIn },
});

export default store;
