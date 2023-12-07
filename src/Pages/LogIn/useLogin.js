import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./Login.reducers";

const useLogin = () => {
  const logInState = useSelector((state) => state.logIn);
  const describeState = useSelector((state) => state.modules);
  console.log(logInState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("session");
  console.log(token);

  const setPasswordValue = (value) => {
    setPassword(value);
    console.log(password);
  };

  const setUsernameValue = (value) => {
    setUsername(value);
    console.log(username);
  };
  console.log("module", describeState);

  const login = async (e) => {
    if (!token) {
      e.preventDefault();
      const userData = {
        username: username,
        password: password,
        _operation: "login",
      };

      try {
        const response = await axios.post(
          "https://anem-topia.bspvision.com/modules/Mobile/api.php",
          userData
        );
        if (response.data.success) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: response,
          });
          localStorage.setItem("session", response.data.result.login.session);
          const session = localStorage.getItem("session");
          const describeData = {
            _operation: "describe",
            _session: session,
            module: "Properties",
          };
          axios
            .post(
              "https://anem-topia.bspvision.com/modules/Mobile/api.php",
              describeData
            )
            .then((response) => {
              console.log(response);
              console.log(logInState);
              dispatch(
                dispatch({
                  type: "DESCRIBE_SUCCESS",
                  payload: response,
                })
              );
              console.log(logInState);
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          dispatch({
            type: "LOGIN_ERROR",
            payload: response.data.error.message,
          });
          setError(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { setPasswordValue, setUsernameValue, login, error };
};

export default useLogin;
