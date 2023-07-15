import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar flex gap-[180px]  justify-between  px-5">
        <div className="  w-[20%]">
          <img className="w-[100%] h-[120px] object-cover" src="https://avatars.mds.yandex.net/i?id=c8e3f60f5836d97e508946f28b8b19ce8779e656-9103996-images-thumbs&n=13" alt="" />
        </div>
        <div className=" w-[60%] links flex gap-14 text-xl list-none cursor-pointer mt-8 py-5 px-5">
        <Link to="/" className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
            Home
          </Link>
          <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
            About us
          </li>
          <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
            Gallery
          </li>
          <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
            Styles
          </li>
          <li className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
            Interior
          </li>
          <Link to="/contact" className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
            Contact
          </Link>
        </div>

        <div className="order w-[200px] h-[160px] z-20 mr-[20px] bg-[#F4D059]  text-center  ">
          <p className="text-[28px] font-bold">
            {" "}
            <p className="mt-8 text-[#00204A]">Order</p> 
            <p className="mt-[-10px] text-[20px] text-gray-500">Catalogue</p>
             {/* <span className="">Catalogue</span>{" "} */}
          </p>
        </div>
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/contact">Contact</NavLink> */}
      </div>
    </nav>
  );
}

export default Navbar;
