import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";

function About() {
  const [api, setApi] = useState(" http://localhost:3000/cardInfo");
  const { data } = UseFetch(api);
  return (
    <div>
      <div className="container_div">
        <div className="about pb-20 mt-5 flex justify-between px-20 text-[#00204A]">
          <div className="left w-[45%]">
            <h2 className="text-5xl mb-6 font-bold "> About us </h2>
            <p className="parag w-[100%] mb-5 text-3xl">
              Trident Modular Housing produce and assemble modular houses that
              are very high quality and they can be used as temporary as well as
              permanent residence.
            </p>
            <h2 className="info text-xl text-[#7a8089] ">
              An enterprise combining the joint expertise of a UK-based
              chartered architectural practice and an experienced Ukrainian
              manufacturer.
            </h2>{" "}
            <br />
            <h2 className="info text-xl  text-[#7a8089] ">
              Trident Modular Housing LTD : Trident Modular Housing is a bespoke
              garden room, modular building designer, and manufacturer.
            </h2>{" "}
            <br />
            <h2 className="info text-xl  text-[#7a8089] ">
              {" "}
              Our main aim is to provide our customers with a fast,
              cost-effective service. We are able to achieve this with the help
              of the newest building technologies for manufacturing and
              assembly.
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
        <div className="cards flex px-20 bg-[#F5F5F5] pb-32">
          {data.map((item) => {
            console.log(item);
            return (
              <div className="card py-5 px-3  mt-10 w-[500px] min-h-[200px] gap-4">
                <img
                  className="w-[180px] mb-5 object-cover rounded-lg"
                  src={item.img}
                  alt="no p[ictutre"
                />
                <div className="text">
                  <h1 className="text-2xl text-[#00204A] font-bold">
                    {item.title}
                  </h1>
                  <p className="w-[90%] mt-4">{item.text.slice(0, 70)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
