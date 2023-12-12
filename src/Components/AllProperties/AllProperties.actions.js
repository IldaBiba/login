export const actionTypes = {
  ALLPROPERTIES_SUCCESS: "ALLPROPERTIES_SUCCESS",
  ALLPROPERTIES_ERROR: "ALLPROPERTIES_ERROR",
};

export const getAllProperties = (res) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ALLPROPERTIES_SUCCESS,
      payload: res,
    });
    dispatch({
      type: actionTypes.ALLPROPERTIES_ERROR,
      payload: res,
    });
  };
};
