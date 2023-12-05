import { actionTypes } from "./Module.actions";

export const modules = (
  state = {
    describe: "",
    error: null,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.DESCRIBE_SUCCESS:
      return { ...state, describe: payload };
    case actionTypes.DESCRIBE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
