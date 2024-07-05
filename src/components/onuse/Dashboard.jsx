import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Post from "../Post";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/Dialog";

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const fd = new FormData();
  fd.append("title", title);
  fd.append("content", content);
  images.forEach((image) => fd.append("image", image));

  const handlePostCreate = () => {
    fetch("http://127.0.0.1:8000/api/v1/posts/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: fd,
    })
      .then((res) => {
        if (res.status == 201) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

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
  }, [token]);

  return (
    <>
      <NavBar />
      <div className="flex h-auto flex-row gap-30">
        <SideBar />

        <div className="flex px-40 w-full flex-col items-center pt-20 gap-7 justify-center pb-4">
          <Dialog className="bg-black text-white">
            <DialogTrigger className="bg-black text-white rounded-md p-2 font-sans font-semibold">
              Add New Post
            </DialogTrigger>
            <DialogTitle></DialogTitle>
            <DialogContent className="bg-black text-white h-auto">
              <DialogDescription></DialogDescription>
              <div className="w-full">
                <div>
                  <h1>New Post</h1>
                </div>
                <div className="mt-2">
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name">Title</label>
                        <input
                          id="name"
                          className="text-black font-medium font-sans"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          placeholder="Title of Post"
                        />
                        <label htmlFor="name">Description</label>
                        <input
                          className="text-black font-light font-sans"
                          id="name"
                          value={content}
                          onChange={(e) => {
                            setContent(e.target.value);
                          }}
                          placeholder="Content of Post"
                        />
                        <input
                          id="imageupload"
                          type="file"
                          name="images"
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files);
                            const imageUrls = files.map((file) =>
                              URL.createObjectURL(file)
                            );
                            setLoadImg(imageUrls);
                            setImages([...e.target.files]);
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex justify-between">
                  <button className="bg-white text-black hover:drop-shadow-md mt-2 p-2 rounded-md hover:cursor-pointer">
                    Cancel
                  </button>
                  <button
                    className="bg-white text-black hover:drop-shadow-md mt-2 p-2 rounded-md hover:cursor-pointer"
                    onClick={handlePostCreate}
                  >
                    Post
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="">
            {data.map((item, index) => (
              <Post key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
