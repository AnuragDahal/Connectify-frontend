import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import CreatePost from "../../pages/CreatePost";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-row "></div>
      <SideBar />
    </>
  );
};

export default Dashboard;
