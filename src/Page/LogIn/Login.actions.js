export const actionTypes = {
  LOGIN_LOGIN: "LOGIN_LOGIN",
  LOGIN_LOGOUT: "LOGIN_LOGOUT",
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
  };
};

export default getLogIn;
