import React, { useEffect, useState } from "react";
import NavBar from "../onuse/NavBar";
import SideBar from "../onuse/SideBar";
import Post from "../onuse/Post";
import { useAuth } from "../../../src/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/Dialog";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Caraousal";

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [titleWordCount, setTitleWordCount] = useState(0);
  const [wordcount, setWordCount] = useState(0);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);

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
        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          console.error("Fetched data is not an array:", fetchedData);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [token]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files).map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      preview: ["jpg", "jpeg", "png", "gif"].includes(
        file.name.split(".").pop().toLowerCase()
      ),
      size:
        file.size > 1024
          ? file.size > 1048576
            ? Math.round(file.size / 1048576) + "mb"
            : Math.round(file.size / 1024) + "kb"
          : file.size + "b",
    }));
    setPreview(files);
    setImages(Array.from(event.target.files));
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleContentChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 300) {
      setContent(inputValue);
      setWordCount(inputValue.length);
    } else {
      setContent(inputValue.substring(0, 300));
      setWordCount(300);
    }
  };
  return (
    <>
      <NavBar />
      <div className="flex h-auto flex-row gap-30">
        <SideBar />

        <div className="flex px-40 w-full flex-col items-center pt-20 gap-7 justify-center pb-4">
          <Dialog>
            <DialogTrigger className="bg-black text-white rounded-md p-2 font-sans font-semibold">
              Add New Post
            </DialogTrigger>
            <DialogTitle></DialogTitle>
            <DialogContent className="bg-white">
              <DialogDescription>
                <div className="p-4 py-8">
                  <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
                    New Post
                  </div>
                  <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 max-w-2xl">
                    <input
                      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                      spellCheck="false"
                      placeholder="Title"
                      type="text"
                      onChange={(e) => {
                        setTitleWordCount(e.target.value.length);
                        setTitle(e.target.value);
                      }}
                      value={title}
                    />
                    <textarea
                      className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                      spellCheck="false"
                      placeholder="Describe everything about this post here"
                      onChange={handleContentChange}
                      value={content}
                    ></textarea>

                    <div className="icons flex text-gray-500 m-2">
                      <label htmlFor="select-image" className="cursor-pointer">
                        <input
                          id="select-image"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                          hidden
                        />
                        Select Image
                      </label>
                      <div className="count ml-auto text-gray-400 text-xs font-semibold">
                        {wordcount + "/300"}
                      </div>
                    </div>

                    <div id="preview" className="my-4  overflow-x-scroll flex">
                      {preview.map((image, index) => (
                        <div
                          key={index}
                          className="relative w-32 h-32 object-cover rounded"
                        >
                          {image.preview && (
                            <div className="relative w-32 h-32 object-cover rounded">
                              <Carousel>
                                <CarouselContent>
                                  <CarouselItem>
                                    <img
                                      src={image.url}
                                      alt=""
                                      className="w-32 h-32 object-cover rounded"
                                    />
                                  </CarouselItem>
                                  <CarouselItem>...</CarouselItem>
                                  <CarouselItem>...</CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>

                              <button
                                onClick={() => removeImage(index)}
                                className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
                              >
                                ×
                              </button>
                              <div className="text-xs text-center p-2">
                                {image.size}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="buttons flex justify-end">
                      <button
                        onClick={handlePostCreate}
                        className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>

          <div>
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
