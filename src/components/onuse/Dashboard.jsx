import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Post from "../Post";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/PopOver";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/PostCard";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

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
          <Popover>
            <PopoverTrigger className="bg-[#212121] text-white font-semibold p-2 rounded-md">
              Add New Post
            </PopoverTrigger>
            <PopoverContent>
              <Card className="w-[350px] bg-[#212121] text-white z-1">
                <CardHeader>
                  <CardTitle>New Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Title</Label>
                        <Input
                          id="name"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          placeholder="Title of Post"
                        />
                        <Label htmlFor="name">Description</Label>
                        <Input
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
                            setImages([...e.target.files]);
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={handlePostCreate}>Post</Button>
                </CardFooter>
              </Card>
            </PopoverContent>
          </Popover>
          <div className="">
            {data.map((item) => (
              <Post {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
