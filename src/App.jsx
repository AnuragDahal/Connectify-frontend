import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/onuse/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";

const App = () => {
  // const location = useLocation();
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </>
  );
};
export default App;
