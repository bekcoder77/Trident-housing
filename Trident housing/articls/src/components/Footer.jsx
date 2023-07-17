import React from "react";
import {BsTelegram,BsYoutube,BsInstagram} from "react-icons/bs"
function Footer() {
  return (
    <div>
      <footer className="bg-[#00204A] text-[#ffffff] pt-14">
        <div className="footer-links cursor-pointer flex justify-between max-[447px]:hidden max-[777px]:hidden gap-10 px-20  py-5">
          <div className="f-link  ">
            <h1 className="font-semibold pb-5 ml-[-30px]">
              <img src="./assets/f-logo.png" alt="" />{" "}
            </h1>
            <div className="dsjif pb-3 text-[#969696]">
              <p>111A T. Shevchenko</p>
              <p>(239) 555-0108</p>
              <p>Info@mail.com</p>
            </div>
            <p className="icon cursor-pointer"></p>
          </div>
          <div className="text text-[#969696] flex flex-col gap-6">
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Home
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              About us
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Gallery
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Styles
            </p>

            <p className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
              Contact
            </p>
          </div>
          <div className="text text-[#969696] flex flex-col gap-6">
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Golden House
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Art Salon
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Commercial Workspace
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Start House
            </p>
            <p className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
              Forest House
            </p>
          </div>
          <div className="text text-[#969696] flex flex-col gap-6">
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Garden House
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Garden Salon
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Commercial Workspace
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Lake House
            </p>
            <p className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
              Forest House
            </p>
          </div>
          <div className="text text-[#969696] flex flex-col gap-6">
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Barn House
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Style
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Style
            </p>
            <p className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
              Style
            </p>
            <p className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
              Style
            </p>
          </div>
        </div>
        <div className="footer-end flex justify-between px-20 py-10 text-[#969696]">
          <p>
            ©Agon Official 2023{" "}
            <span className="ml-2 font-medium">by Khalimov Otabek</span>{" "}
          </p>
         <div className="icons flex items-center gap-4 text-2xl cursor-pointer">
         <p className=" hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]"><BsTelegram/> </p>
          <p className=" hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]"><BsYoutube/> </p>  
                  <p className=" hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]"><BsInstagram/> </p>
         </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
