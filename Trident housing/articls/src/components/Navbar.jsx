import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar flex gap-[180px]  justify-between px-5">
        <div className="py-5  w-[20%]">
          <img className="w-[250px] h-[50px]" src="./assets/logo.png" alt="" />
        </div>
        <div className=" w-[60%] links flex gap-14 text-xl list-none cursor-pointer mt-3 py-5 px-5">
          <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
            Home
          </li>
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
          <li className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
            Contact
          </li>
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
