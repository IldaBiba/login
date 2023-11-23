export const actionTypes = {
  LOGIN_LOGIN: "LOGIN_LOGIN",
  LOGIN_LOGOUT: "LOGIN_LOGOUT",
  LOGIN_ERROR: "LOGIN_ERROR",
};

const getLogIn = ({ response }) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_LOGIN,
      paylod: response,
    });
    dispatch({
      type: actionTypes.LOGIN_LOGOUT,
    });
    dispatch({
      type: actionTypes.LOGIN_ERROR,
      paylod: response,
    });
  };
};

export default getLogIn;
