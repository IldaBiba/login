import { configureStore } from "@reduxjs/toolkit";
import { logIn } from "../Components/LogIn/Login.reducers";

const store = configureStore({
  reducer: { logIn },
});

export default store;
