import "./App.css";
import LogIn from "./Page/LogIn/LogIn";
import Home from "./Page/Main/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const token = localStorage.getItem("session");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes token={token} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/log-in" element={<LogIn />} />
        {/* <Route
          path="/"
          element={
            <>
              <ProtectedRoutes token={token} /> <Home /> <ProtectedRoutes />
            </>
          }
        /> */}
        {/* <Route path="/" element={<Home token={token} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
