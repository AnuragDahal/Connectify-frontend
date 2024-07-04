import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Post from "../Post";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/posts/read/public", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedData) => {
        // Ensure fetchedData is an array before setting it
        if (Array.isArray(fetchedData)) {
          data.push(setData(fetchedData));
        } else {
          console.error("Fetched data is not an array:", fetchedData);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Dependency array to avoid fetching on every render

  return (
    <>
      <NavBar />
      <div className="flex h-auto flex-row gap-30">
        <SideBar />

        <div className="flex px-40 w-full flex-col items-center pt-20 gap-7 justify-center pb-4">
          <button
            className="p-3 w-fit h-auto hover:cursor-pointer hover:bg-purple-500 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              navigate("/create");
            }}
          >
            Add new Post
          </button>
          {data.map((item) => (
            <Post {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
