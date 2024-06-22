import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/SideBar";

const PATH_NOT_TO_RENDER_NAVBAR_AND_SIDEBAR = ["/login", "/signup"];

const App = () => {
  const location = useLocation();
  return (
    <>
      {PATH_NOT_TO_RENDER_NAVBAR_AND_SIDEBAR.includes(
        location.pathname
      ) ? null : (
        <>
          <NavBar />
          <SideBar />
        </>
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
