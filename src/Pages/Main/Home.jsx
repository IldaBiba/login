import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Input from "../../Components/Input/Input";
import NavBar from "../../Components/NavBarBottom/NavBar";

function Home() {
  const logInState = useSelector((state) => state.logIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("session");
    console.log(logInState);
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    console.log(logInState);
    navigate("/log-in");
  }
  function handleClickAdd() {
    navigate("/add-property");
  }

  return (
    <div>
      <div>This is the main page.</div>
      <div>
        <Button onClick={handleClick}>Log Out</Button>
        <Button onClick={handleClickAdd}>Add Property</Button>
      </div>
    </div>
  );
}

export default Home;
