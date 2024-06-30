import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Post from "../Post";

// const 
const Dashboard = () => {
  const data = [

  ]
  return (
    <>
      <NavBar />
      <div className="flex h-auto flex-row gap-30">
        <SideBar />
        <div className="flex px-40 w-full flex-col items-center pt-20 gap-7 justify-center pb-4">
          {data.map((item) => (
            <Post {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
