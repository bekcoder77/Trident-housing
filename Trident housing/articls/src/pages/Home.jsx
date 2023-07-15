import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import UseFetch from "../hooks/UseFetch";
import ArticleList from "../components/ArticleList";

function Home() {
  const [infos, setInfos] = useState([
    {
      img: "./assets/state.png",
      title: "Quality",
      text: "A Quality flexible modular housing solutionset nd they can be used as temporary as well as permanent residence.",
    },
    {
      img: "./assets/state.png",
      title: "Quality",
      text: "A Quality flexible modular housing solutionset nd they can be used as temporary as well as permanent residence.",
    },
    {
      img: "./assets/state.png",
      title: "Quality",
      text: "A Quality flexible modular housing solutionset nd they can be used as temporary as well as permanent residence.",
    },
    {
      img: "./assets/state.png",
      title: "Quality",
      text: "A Quality flexible modular housing solutionset nd they can be used as temporary as well as permanent residence.",
    },
  ]);

  const [api, setApi] = useState("http://localhost:3000/articles");
  const { data, isPending, error } = UseFetch(api);

  return (
    <div>
      <div className="container_div px-10">
        <header>
          <div className="header">
            <h1 className="text-[40px] w-[37%] text-white pt-[410px] ml-16">
              A place that is more than an office – a place where you can create
              work-life balance
            </h1>
          </div>
          <button className="btn bg-[#00204A] duration-[.6s]  rounded-sm hover:bg-[#18A7A7]  text-[white] mb-10 text-center    py-3 px-10  ml-0">
            Read More ➡️
          </button>
        </header>
        <div className="title text-5xl text-[#00204A] font-normal mt-10">
          Our house designs
        </div>
        <div className="btns mt-6">
          <button className="btn bg-[#F4D059] duration-[.6s] hover:bg-[#18A7A7] rounded-sm hover:text-white text-[#00204A] mb-10 text-center    py-3 px-10  ml-0">
            Garden rooms
          </button>
          <button className="btn bg-[#ffffff] duration-[.6s] hover:bg-[#18A7A7]  rounded-sm hover:text-white  border-grey-400 border-2 text-[#00204A] mb-10 text-center ml-8   py-3 px-10  ">
            Modular houses
          </button>
        </div>

        <div className="cards py-10">
          <ArticleList data={data} />
        </div>

        <div className="others flex justify-between bg-[#00204A] relative ">
          <div className="image w-[50%]">
            <img className="" src="./assets/other.png" alt="" />
            <img
              className=" top-8 left-9 absolute"
              src="./assets/other2.png"
              alt=""
            />
          </div>
          <div className="info  w-[60%] py-10 text-white">
            <h1 className="text-5xl mt-6 ">
              Trident – we love <br /> inviting interiors too!
            </h1>
            <p className="w-[60%] mt-5">
              Our architects have prepared some stunning ready-made interior
              designs...check them out...
            </p>
          </div>
        </div>
        <div className="btns flex justify-center ml-[-74px] py-0">
          <button className="btn bg-[#F4D059] duration-[.6s] text-[20px]  rounded-sm hover:bg-[#18A7A7]  text-[white] mb-10 text-center    py-2 px-10  ml-0">
            Read More ➡️
          </button>
        </div>

        <div className="choices flex  justify-between py-20 ">
          <div className="left w-[50%]">
            <h1 className="text-4xl text-[#00204A]">
              Trident Modular Housing produce and assemble modular houses that
              are very high Quality and they can be used as temporary as well as
              permanent residence.
            </h1>
            <div className="texts flex flex-wrap gap-10">
              {infos.map((item) => {
                return (
                  <div className="card py-5 px-3 flex mt-10 w-[300px] min-h-[200px] gap-4">
                    <div className="img">
                      <img
                        className="w-[200px] object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h1 className="text-2xl text-[#00204A] font-bold">
                        {item.title}
                      </h1>
                      <p className="w-[90%] mt-4">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <img src="./assets/house.png" alt="" />
          </div>
        </div>

        <div className="order flex justify-between min-h-[200px] border-2 ">
          <div className="info py-20 px-8 w-[50%]">
            <h1 className="text-3xl text-[#00204A] mb-2">
              Order our catalogue for free
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              velit veniam, animi vitae quam totam quod voluptate numquam sint
              excepturi!{" "}
            </p>
            <button className="btn bg-[#00204A] duration-[.6s] mt-5  rounded-sm hover:bg-[#18A7A7]  text-[white]  text-center    py-3 px-10  ml-0">
              Read More ➡️
            </button>
          </div>
          <div className="book">
            <img src="./assets/book.png" alt="" />
          </div>
        </div>

        {/* Slider */}
        <div className="mt-[100px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./assets/c1.png" alt="" />{" "}
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="info text-[00204A] py-20 text-center ">
          <h1 className="text-4xl py-5  ">Seo headline</h1>
          <p className="w-[80%] m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="btn bg-[#00204A] duration-[.6s] mt-5  rounded-sm hover:bg-[#18A7A7]  text-[white]  text-center    py-3 px-10  ml-0">
            Read More ➡️
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
