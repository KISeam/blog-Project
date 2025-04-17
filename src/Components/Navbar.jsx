import React from "react";
import { IoMenu, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral text-white px-6 sticky top-0 z-50">
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1 space-x-4 text-sm font-semibold">
            <li className="text-lg">
              <a>All</a>
            </li>
            <li className="text-lg">
              <a>Latest</a>
            </li>
            <li className="text-lg">
              <a>HTML</a>
            </li>
            <li className="text-lg">
              <a>CSS</a>
            </li>
            <li className="text-lg">
              <a>JavaScript</a>
            </li>
            <li className="text-lg">
              <a>React</a>
            </li>
            <li className="text-lg">
              <a>Node.js</a>
            </li>
            <li className="text-lg">
              <a>Git</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <button className="btn text-sm font-semibold">Sign In</button>
          <button className="btn btn-ghost btn-circle">
            <IoSearch className="text-white text-xl" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <IoMenu className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
