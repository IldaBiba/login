import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("session");
    dispatch({
      type: "LOGIN_LOGOUT",
    });
    navigate("/log-in");
  }

  return (
    <div>
      <div>This is the main page.</div>
      <div>
        <Button onClick={handleClick}>Log Out</Button>
      </div>
    </div>
  );
}

export default Home;
