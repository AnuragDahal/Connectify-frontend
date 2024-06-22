import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const PATH_NOT_TO_RENDER_NAVBAR = ["/login", "/signup"];

const App = () => {
  const location = useLocation();
  return (
    <>
      {PATH_NOT_TO_RENDER_NAVBAR.includes(location.pathname) ? null : (
        <NavBar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export default App;
