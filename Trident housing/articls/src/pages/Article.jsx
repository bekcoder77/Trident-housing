import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import PageNotFound from "./PageNotFound";
function Article() {
  const { id } = useParams();
  const [api, setApi] = useState(`http://localhost:3000/articles/${id}`);
  const { data, isPending, error } = UseFetch(api);
  const navigate = useNavigate();
  console.log(data.img);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/PageNotFound");
      }, 1000);
    }
  }, [error]);

  return (
    <div className="about pb-20 flex bg-red-200">
      <div className="left w-[60%]">
        {/* {error && <PageNotFound />} */}
        <h2 className="article"> {data.title} </h2>
        {/* <img src={data.image} alt="" /> */}
        <h2 className="info">{data.info}</h2>
        <p className="parag">{data.body}</p>
      </div>
      <div className="imagsds">
        <img className="w-[100%]" src={data.image} alt="no picture" />
      </div>
    </div>
  );
}

export default Article;
