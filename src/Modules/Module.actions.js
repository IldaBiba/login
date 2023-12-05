export const actionTypes = {
  DESCRIBE_SUCCESS: "DESCRIBE_SUCCESS",
  DESCRIBE_ERROR: "DESCRIBE_ERROR",
};

export const getModules = (res) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DESCRIBE_SUCCESS,
      payload: res,
    });
    dispatch({
      type: actionTypes.DESCRIBE_ERROR,
      payload: res,
    });
  };
};
