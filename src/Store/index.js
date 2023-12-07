import { configureStore } from "@reduxjs/toolkit";
import { logIn } from "../Pages/LogIn/Login.reducers";
import { describe } from "../Pages/LogIn/Describe.reducers";

const store = configureStore({
  reducer: { logIn, describe },
});

export default store;
