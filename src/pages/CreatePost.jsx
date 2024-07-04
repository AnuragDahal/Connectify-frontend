import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/PostCard";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const getImage = () => {
    const img = document.getElementById("imageupload");
    img.addEventListener("click", (e) => {
      e.preventDefault();
      // display the image
    });
  };
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

  return (
    <>
      <div className="flex justify-center items-center w-full p-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>New Post</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
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
      </div>
    </>
  );
};
export default CreatePost;
