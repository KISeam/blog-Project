import React, { useEffect, useState } from "react";
import ViewBlog from "./ViewBlog";

const ViewBlogs = ({ viewBlogData, selectedCategory }) => {
  const [viewBlogs, setViewBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setViewBlogs(data));
  }, []);

  let filteredBlogs = viewBlogs;

  if (selectedCategory) {
    filteredBlogs = viewBlogs.filter(
      (blog) => blog.category === selectedCategory
    );
  }

  const displayBlogs = viewBlogData
    ? [viewBlogData]
    : showAll
    ? filteredBlogs
    : filteredBlogs.slice(0, 5);

  return (
    <div className="w-2/4">
      {displayBlogs.length === 0 ? (
        <p className="text-white text-center">No blogs found.</p>
      ) : (
        displayBlogs.map((viewBlog) => <ViewBlog viewBlog={viewBlog} />)
      )}

      {!viewBlogData && filteredBlogs.length > 5 && (
        <div className="text-center my-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewBlogs;
