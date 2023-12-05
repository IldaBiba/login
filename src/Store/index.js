import { configureStore } from "@reduxjs/toolkit";
import { logIn } from "../Pages/LogIn/Login.reducers";
import { modules } from "../Modules/Modules.reducers";

const store = configureStore({
  reducer: { logIn, modules },
});

export default store;
