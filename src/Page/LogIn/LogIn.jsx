import React, { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";
import getLogIn from "../../Redux/Login.actions";
import { useDispatch } from "react-redux";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("session");
  console.log(token);

  function handlePassword(event) {
    setPassword(event.target.value);
    console.log(password);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
    console.log(username);
  }
  //   useEffect(() => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
      _operation: "login",
    };
    axios
      .post("https://anem-topia.bspvision.com/modules/Mobile/api.php", userData)
      .then((response) => {
        console.log(response);
        dispatch(getLogIn({ response }));
        // dispatch({
        //   type: "LOGIN_LOGIN",
        //   payload: response,
        // });
        localStorage.setItem("session", response.data.result.login.session);
        const datajson = JSON.stringify(response);
        setData(datajson);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <Container>
        <Row className="row_login">
          <Col className="col_login">
            <form className="form" onSubmit={handleSubmit}>
              <h1>Let's Log In.</h1>
              <label>Username:</label>
              <input
                placeholder="Type your username here"
                name="username"
                type="text"
                onChange={handleUsername}
              ></input>
              <label>Password:</label>
              <input
                type="password"
                onChange={handlePassword}
                name="password"
              ></input>
              <Button type="submit" className="bbtn">
                Log In
              </Button>
            </form>
            {data && <p>{data}</p>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;
