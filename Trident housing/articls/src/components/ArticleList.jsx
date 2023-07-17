import React from "react";
import { Link, NavLink } from "react-router-dom";

function ArticleList({ data }) {
  return (
    <ul className="flex flex-wrap  justify-between">
      {data.map((item) => {
        return (
          <li key={item.id} className="w-[400px] text-center  ">
           <img className="w-[400px] h-[250px] rounded-md cursor-pointer duration-300  hover:scale-[1.05]  " src={item.img} alt="" />
              <h2 className="text-3xl pt-2 text-[#00204A]">{item.title}</h2>
              {/* <p className="text-[#00204A]">{item.text}</p> */}
            <Link to={`/article/${item.id}`}>  <button className="btn text-[#00204A] duration-[.6s]  rounded-sm hover:bg-[#18A7A7] hover:text-white mb-2 text-center    py-2 px-6  ml-0">
            Read More ➡️
          </button></Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleList;
