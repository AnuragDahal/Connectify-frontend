import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Post from "../Post";

const Dashboard = () => {
  const data = [
    {
      fullName: "Anurag Dahal",
      description: "This is a description",
      imageLink:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      fullName: "Anurag Dahal",
      description: "This is a description",
      imageLink:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      fullName: "Anurag Dahal",
      description: "This is a description",
      imageLink:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      fullName: "Anurag Dahal",
      description: "This is a description",
      imageLink:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      fullName: "Anurag Dahal",
      description: "This is a description",
      imageLink:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      fullName: "Salman khan",
      description: "This is a description",
      imageLink:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ];
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
