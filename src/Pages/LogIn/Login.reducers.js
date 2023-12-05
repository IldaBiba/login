import { actionTypes } from "./LogIn.actions";

export const logIn = (
  state = {
    data: "",
    error: null,
    isUser: false,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      console.log("its here");
      return {
        ...state,
        data: payload,
        isUser: true,
        error: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return { ...state, isUser: false, error: null };
    case actionTypes.LOGIN_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
