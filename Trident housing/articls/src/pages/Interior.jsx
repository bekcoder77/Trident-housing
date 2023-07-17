import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";
function Interior() {
  const [api, setApi] = useState(" http://localhost:3000/cardInfo");
  const { data } = UseFetch(api);
  return (
    <div className="px-20">
      <div className="title text-5xl text-[#00204A] font-normal mt-10">
        Our house designs
      </div>
      <div className="btns mt-6">
        <button className="btn  bg-[#F4D059] duration-[.6s] hover:bg-[#18A7A7] rounded-md hover:text-white text-[#00204A] mb-10 text-center    py-3 px-10  ml-0">
          STANDARD
        </button>
        <button className="btn bg-[#ffffff] duration-[.6s] hover:bg-[#18A7A7]  rounded-md hover:text-white  border-grey-400 border-2 text-[#00204A] mb-10 text-center ml-8   py-3 px-10  ">
          MEDITERRANEAN
        </button>
        <button className="btn bg-[#ffffff] duration-[.6s] hover:bg-[#18A7A7]  rounded-md hover:text-white  border-grey-400 border-2 text-[#00204A] mb-10 text-center ml-8   py-3 px-10  ">
          SCANDINAVIAN
        </button>
      </div>
      <div className="about pb-20 mt-5 flex justify-between  text-[#00204A]">
        <div className="left w-[45%]">
          <h2 className="text-5xl mb-6 font-bold "> About us </h2>
          <p className="parag w-[100%] mb-5 text-3xl">
            Trident Modular Housing produce and assemble modular houses that are
            very high quality and they can be used as temporary as well as
            permanent residence.
          </p>
          <h2 className="info text-xl text-[#7a8089] ">
            An enterprise combining the joint expertise of a UK-based chartered
            architectural practice and an experienced Ukrainian manufacturer.
          </h2>{" "}
          <br />
          <h2 className="info text-xl  text-[#7a8089] ">
            Trident Modular Housing LTD : Trident Modular Housing is a bespoke
            garden room, modular building designer, and manufacturer.
          </h2>{" "}
          <br />
          <h2 className="info text-xl  text-[#7a8089] ">
            {" "}
            Our main aim is to provide our customers with a fast, cost-effective
            service. We are able to achieve this with the help of the newest
            building technologies for manufacturing and assembly.
          </h2>{" "}
          <br />
          <h2 className="info text-xl  text-[#7a8089] "></h2>
        </div>
        <div className="imagsds w-[45%]">
          <img
            className="w-[100%] rounded-lg h-[700px] object-cover"
            src="https://wallpapers.com/images/hd/three-storey-beautiful-house-o9z49kit5n5h2jkj.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Interior;
