import { actionTypes } from "./Login.actions";

export const logIn = (
  state = {
    data: "",
    error: null,
    isUser: false,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.LOGIN_LOGIN:
      return { ...state, data: payload, isUser: true };
    case actionTypes.LOGIN_LOGOUT:
      return { ...state, isUser: false };
    case actionTypes.LOGIN_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
