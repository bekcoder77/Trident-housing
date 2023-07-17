import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import PageNotFound from "./PageNotFound";
function Article() {
  const [cardInfo, setCardInfo] = useState([
    {
      img: "https://mykaleidoscope.ru/x/uploads/posts/2023-04/1682100990_mykaleidoscope-ru-p-fasadi-chastnikh-domov-dizain-krasivo-70.jpg",
      title: "QUICK TURNAROUND",
      text: "Two to three months from order to completion on site.",
    },
    {
      img: "https://i.pinimg.com/originals/fc/b4/dd/fcb4dd0da70ba6564402975f8dcf454c.jpg",
      title: "LOW COST",
      text: "Timber-frame structures manufactured off site with high precision in factory conditions.",
    },
    {
      img: "https://w-dog.ru/wallpapers/2/2/380587206677583/dom-osobnyak-dizajn-gazon-kusty-cvety-zelen-trava-trotuar-solnce-nebo-goluboe.jpg",
      title: "FLEXIBILITY",
      text: "Finishing, specification and appliances to meet your requirements.",
    },
    {
      img: "https://wallpapers.com/images/hd/three-storey-beautiful-house-o9z49kit5n5h2jkj.jpg",
      title: "TOP QUALITY",
      text: "Trident Modular Housing LTD buildings are cheaper than those of our competitors.t",
    },
  ]);
  const { id } = useParams();
  const [api, setApi] = useState(`http://localhost:3000/articles/${id}`);
  const { data, isPending, error } = UseFetch(api);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);
  return (
    <div className="container_div">
      {data && (
        <div className="about pb-20 mt-5 flex justify-between px-20 text-[#00204A]">
          <div className="left w-[45%]">
            {error && <PageNotFound />}
            <h2 className="text-5xl mb-6 font-bold "> {data.title} </h2>
            <p className="parag w-[100%] mb-5 text-3xl">{data.body}</p>
            <h2 className=" text-xl text-[#7a8089] ">{data.info}</h2> <br />
            <h2 className=" text-xl text-[#7a8089] ">{data.infos}</h2>{" "}
            <br />
            <h2 className=" text-xl text-[#7a8089] ">{data.infos2}</h2>{" "}
            <br />
            <h2 className=" text-xl text-[#7a8089] ">{data.infos3}</h2>
          </div>
          <div className="imagsds w-[45%]">
            <img
              className="w-[100%] rounded-lg h-[700px] border-none object-cover"
              src={data.image}
              alt=""
            />
          </div>
        </div>
      )}      
      <div className="cards flex px-20 bg-[#F5F5F5] pb-32">
        {cardInfo.map((item) => {
          return (
            <div key={item.id} className="card py-5 px-3  mt-10 w-[500px] min-h-[200px] gap-4">
              <img
                className="w-[180px] rounded-lg mb-5 object-cover cursor-pointer duration-300  hover:scale-[1.05] "
                src={item.img}
                alt=""
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
  );
}

export default Article;
