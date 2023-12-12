export const actionTypes = {
  ADDPROPERTY_SUCCESS: "ADDPROPERTY_SUCCESS",
  ADDPROPERTY_ERROR: "ADDPROPERTY_ERROR",
};

export const getAddProperty = (res) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADDPROPERTY_SUCCESS,
      payload: res,
    });
    dispatch({
      type: actionTypes.ADDPROPERTY_ERROR,
      payload: res,
    });
  };
};
