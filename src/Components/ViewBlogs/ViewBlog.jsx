import React from "react";
import { CiBookmark } from "react-icons/ci";

const ViewBlog = ({ viewBlog }) => {
  const { title, cover_img, author, description, category } = viewBlog;

  return (
    <>
      <div>
        <div className="mb-6">
          <div className="card bg-base-100 w-full shadow-2xl">
            <figure>
              <img className="w-full transition hover:scale-105 delay-100" src={cover_img} alt="Shoes" />
            </figure>
            <ul className="list bg-base-100 rounded-box shadow-md">
              <li className="list-row">
                <div>
                  <img className="size-12 rounded-full object-cover" src={author.img} />
                </div>
                <div>
                  <div className="font-bold text-base">{author.name}</div>
                  <div className="text-xs uppercase opacity-60">{category}</div>
                </div>
                <button className="btn btn-square btn-ghost">
                  <CiBookmark className="w-6 h-6" />
                </button>
              </li>
              <li>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p>{description}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
