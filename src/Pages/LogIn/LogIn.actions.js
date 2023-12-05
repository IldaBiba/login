export const actionTypes = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  DESCRIBE_SUCCESS: "DESCRIBE_SUCCESS",
  DESCRIBE_ERROR: "DESCRIBE_ERROR",
};

export const getLogIn = (res) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: res,
    });
    dispatch({
      type: actionTypes.LOGOUT_SUCCESS,
    });
    dispatch({
      type: actionTypes.LOGIN_ERROR,
    });
  };
};
