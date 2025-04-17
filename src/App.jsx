import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header";
import ViewBlogs from "./Components/ViewBlogs/ViewBlogs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";

function App() {
  const [filterData, setFilterData] = useState(null);
  const [viewBlog, setViewBlog] = useState(null);

  const handleFilterBlogData = (category) => {
    setFilterData(category);
    setViewBlog(null);
  };

  const handleViewBlog = (blog) => {
    setViewBlog(blog);
  };

  return (
    <>
      <div className="bg-black">
        <Header />
        <Navbar />
        {/* <HeroSection /> */}
        <div className="flex gap-6 w-10/12 mx-auto mt-6">
          <Categories handleFilter={handleFilterBlogData} />
          <ViewBlogs viewBlogData={viewBlog} selectedCategory={filterData} />
          <Blogs handleViewBlog={handleViewBlog} filterBlog={filterData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
