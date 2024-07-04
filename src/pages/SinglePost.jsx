import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { token } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/posts/read?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [id, token]);

  return (
    <>
      <div className="text-4xl text-red-400 font-sans font-bold">
        This is the single post page
      </div>
    </>
  );
};
export default SinglePost;
