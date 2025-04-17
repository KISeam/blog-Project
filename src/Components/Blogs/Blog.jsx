import React from "react";

const Blog = ({ blog, handleViewBlog }) => {
  const { title, cover_img } = blog;

  return (
    <div className="mb-6">
      <div onClick={() => handleViewBlog(blog)} className="bg-white rounded-xl cursor-pointer shadow-2xl overflow-hidden">
        <img src={cover_img} alt={title} />
        <h2 className="text-lg p-4 font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default Blog;
