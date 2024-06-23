import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";

const PATH_NOT_TO_RENDER_NAVBAR_AND_SIDEBAR = ["/login", "/signup"];

const App = () => {
  const location = useLocation();
  return (
    <>
      {PATH_NOT_TO_RENDER_NAVBAR_AND_SIDEBAR.includes(
        location.pathname
      ) ? null : (
        <div className="flex flex-row">
          <NavBar />
          <SideBar />
          <Home />
        </div>
      )}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export default App;
