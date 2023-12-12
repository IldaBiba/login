import { configureStore } from "@reduxjs/toolkit";
import { logIn } from "../Pages/LogIn/Login.reducers";
import { describe } from "../Pages/LogIn/Describe.reducers";
import { addProperty } from "../Pages/AddProperty/AddProperty.reducers";
import { allProperties } from "../Components/AllProperties/AllProperties.reducers";
const store = configureStore({
  reducer: { logIn, describe, addProperty, allProperties },
});

export default store;
