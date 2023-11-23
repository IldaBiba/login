import "./App.css";
import LogIn from "./Page/LogIn/LogIn";
import Home from "./Page/Main/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
