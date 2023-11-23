import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Home() {
  const token = localStorage.getItem("session");
  console.log(token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("session");
    dispatch({
      type: "LOGIN_LOGOUT",
    });
    navigate("/");
  }

  return (
    <div>
      <div>This is the main page.</div>
      <div>
        {token ? (
          <Button onClick={handleClick}>Log Out</Button>
        ) : (
          <Button
            onClick={() => {
              navigate("/log-in");
            }}
          >
            Log In
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
