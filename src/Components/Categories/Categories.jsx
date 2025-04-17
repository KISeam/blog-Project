import React, { useEffect, useState } from "react";
import Categorie from "./Categorie";

const Categories = ({ handleFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-1/4 h-screen bg-gray-600 text-black p-4 rounded-xl sticky top-20">
      <div className="bg-white rounded-xl cursor-pointer shadow-2xl mb-4">
        <h1
          onClick={() => handleFilter(null)}
          className="text-lg p-4 font-semibold"
        >
          All
        </h1>
      </div>
      <div>
        {categories.map((categorie) => (
          <Categorie handleFilter={handleFilter} categorie={categorie} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
