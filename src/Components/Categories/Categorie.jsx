import React from "react";

const Categorie = ({ categorie, handleFilter }) => {
  const { name } = categorie;

  return (
    <div className="mb-4">
      <div className="bg-white rounded-xl cursor-pointer shadow-2xl">
        <h1
          onClick={() => handleFilter(name)}
          className="text-lg p-4 font-semibold"
        >
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Categorie;
