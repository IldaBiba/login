import { actionTypes } from "./AddProperty.actions";

export const addProperty = (
  state = {
    property: "",
    error: null,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.ADDPROPERTY_SUCCESS:
      return { ...state, property: payload };
    case actionTypes.ADDPROPERTY_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
