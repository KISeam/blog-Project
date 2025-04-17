import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ filterBlog, handleViewBlog }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  const blogDataName = () => blogData.map((blog) => blog.category);
  
  const filteredBlog = filterBlog
    ? blogData.filter((blog) => blog.category === filterBlog)
    : blogData;

  return (
    <div className="w-1/4 bg-gray-600 text-black p-4 rounded-xl h-screen sticky top-20 overflow-auto">
      <h2 className="font-bold text-2xl mb-6 text-white">
        {blogDataName} Blog: {filteredBlog.length}
      </h2>
      {filteredBlog.map((blog) => (
        <Blog handleViewBlog={handleViewBlog} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
