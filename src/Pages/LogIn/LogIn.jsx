import React, { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useLogin from "./useLogin";
import "./LogIn.css";

function LogIn() {
  const token = localStorage.getItem("session");
  console.log(token);

  const { setPasswordValue, setUsernameValue, login, error } = useLogin();

  if (token) {
    return <Navigate to="/all-properties/1" replace />;
  } else {
    return (
      <Container>
        <Row className="row_login">
          <Col className="col_login">
            <form className="form" onSubmit={(e) => login(e)}>
              <h1>Let's Log In.</h1>
              <label>Username:</label>
              <input
                placeholder="Type your username here"
                name="username"
                type="text"
                onChange={(e) => setUsernameValue(e.target.value)}
              ></input>
              <label>Password:</label>
              <input
                type="password"
                onChange={(e) => setPasswordValue(e.target.value)}
                name="password"
              ></input>
              <Button type="submit" className="bbtn">
                Log In
              </Button>
            </form>
            {error && "Authentication failed"}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;
