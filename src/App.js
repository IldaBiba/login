import "./App.css";
import LogIn from "./Pages/LogIn/LogIn";
import Home from "./Pages/Main/Home";
import AddProperty from "./Pages/AddProperty/AddProperty";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/all-properties/:page_number" element={<Home />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/edit/:id" element={<AddProperty />} />
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
