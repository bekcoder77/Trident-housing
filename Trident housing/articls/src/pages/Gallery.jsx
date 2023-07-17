import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";

function Gallery() {
  const [api, setApi] = useState("http://localhost:3000/articles");
  const { data } = UseFetch(api);
  return (
    <div className="gallerys px-20">
      <div className="flex gap-5 ">
        <div className="title text-5xl text-[#00204A] font-normal mt-10">
          Gallery
        </div>
        <div className="btns mt-10">
          <button className="btn bg-[#F4D059] duration-[.6s] hover:bg-[#18A7A7] rounded-md hover:text-white text-[#00204A] mb-10 text-center    py-3 px-10  ml-0">
            Garden rooms
          </button>
          <button className="btn bg-[#ffffff] duration-[.6s] hover:bg-[#18A7A7]  rounded-md hover:text-white  border-grey-400 border-2 text-[#00204A] mb-10 text-center ml-8   py-3 px-10  ">
            Modular houses
          </button>
        </div>
      </div>
      <div className="gallery flex justify-between flex-wrap gap-5">
        {data.map((item) => {
          return (
            <img
              className="w-[435px] h-[300px] object-cover cursor-pointer duration-300  hover:scale-[1.05]   rounded-lg "
              src={item.image}
              alt=""
            />
          );
        })}
      </div>
      <div className="gallery flex justify-between flex-wrap gap-5 mt-5 mb-20">
        {data.map((item) => {
          return (
            <img
              className="w-[435px] h-[300px] object-cover rounded-lg cursor-pointer duration-300  hover:scale-[1.05]  "
              src={item.img}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
export default Gallery;
