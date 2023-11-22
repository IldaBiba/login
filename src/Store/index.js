import { configureStore } from "@reduxjs/toolkit";
import { logIn } from "../Redux/Login.reducers";

const store = configureStore({
  reducer: { logIn },
});

export default store;
