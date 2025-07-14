import React from "react";
import { useParams } from "react-router-dom";

function Blog({ blog }) {
  const { id } = useParams();
  const blogPost = blog.find((b) => b.id === Number(id));
  if (!blogPost) {
    return <center><h2>Blog not found</h2></center>;
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>{blogPost.title}</h1>
      <p style={{textAlign:"center"}}>{blogPost.description}</p>
    </div>
  );
}

export default Blog;
