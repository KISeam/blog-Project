import React, { useEffect, useState } from "react";

const HeroSection = () => {

    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogData(data));
    }, []);

    

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="leftImage"></div>
        <div className="rightImage"></div>
      </div>
    </>
  );
};

export default HeroSection;
