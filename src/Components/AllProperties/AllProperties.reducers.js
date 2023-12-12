import { actionTypes } from "./AllProperties.actions";

export const allProperties = (
  state = {
    properties: "",
    error: null,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.ALLPROPERTIES_SUCCESS:
      return { ...state, properties: payload };
    case actionTypes.ALLPROPERTIES_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
