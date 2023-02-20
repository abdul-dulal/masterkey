import React from "react";
import mic from "../../assets/img/g835SLOHDG-F-1-removebg-preview 1.png";
import { AiFillStar } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import headphone from "../../assets/img/headphone.png";
import mic2 from "../../assets/img/mic.png";
import circle from "../../assets/img/Ellipse 15.png";

import PSlider from "../PSlider";
import Siderbar from "../Siderbar";
const Home = () => {
  return (
    <>
      <div className="flex gap-10 mt-7 bg-white relative  ">
        <div className="w-4/6 flex shadow-sm py-7  rounded-[10px]">
          <div className="w-72">
            <img src={mic} alt="" />
          </div>
          <div className="flex-grow">
            <h1 className="text-[22px] font-semibold">
              Beats Studio3 Wireless Headphone
            </h1>
            <p className="flex gap-1 items-center text-[#38FF4C] mt-[6px] mb-3">
              {Array(5).fill(<AiFillStar size={20} />)}
              <span className="ml-3 text-[#756B6B] text-[15px]">
                ( 200+ Reviews )
              </span>
            </p>
            <p className="text-base font-normal">
              Ergonomic or cupe with on-oor controls up to <br /> 22 hours of
              tening time. Apple Wi crip & Closs{" "}
            </p>
            <div className="flex mt-12 gap-12">
              <div className="flex items-center gap-2">
                Color: <p className="w-5 h-5 bg-[#66FF1E] rounded-full"></p>{" "}
                <p className="w-5 h-5 bg-white rounded-full" />
                <p className="w-5 h-5 bg-[#1E78FF] rounded-full" />
                <p className="w-5 h-5 bg-[#8E3785] rounded-full" />
              </div>
              <div className="w-24 h-9  bg-[#F5F4F4]  rounded-[10px] shadow-xl flex items-center justify-center gap-[10px]">
                <p className="w-5 h-5  shadow-xl flex items-center justify-center text-xl rounded-full text-black">
                  -
                </p>
                <p className="w-5 h-5  shadow-xl flex items-center justify-center text-xl rounded-full text-black">
                  1
                </p>
                <p className="w-5 h-5  shadow-xl flex items-center justify-center text-xl rounded-full text-black">
                  +
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-12">
              <div className="w-14 h-12 border-2 border-[ #38FF4C] flex items-center justify-center ">
                <BsHeartFill size={25} className="text-[#38FF4C] " />
              </div>
              <button className="border-2 border-[ #38FF4C] h-10 px-[17px] rounded-[10px] text-xl">
                Add to card
              </button>
              <button className="h-10 px-[17px] bg-[#38FF4C] rounded-[10px] text-xl cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/6  relative">
          <div className="hello py-5 rounded-[20px] px-3">
            <img
              src={circle}
              className="absolute right-0 top-0 object-cover"
              alt=""
            />
            <h1 className="text-[#EBEBEB] text-[29px] ">
              Summer headphones <br /> from top brands
            </h1>
            <img src={mic2} className=" ml-[52%] " alt="" />
            <img
              src={headphone}
              className="absolute top-[33%] right-0 "
              alt=""
            />
            <p className="-mt-10 text-[23px] text-white cursor-pointer">
              Buy Now
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex">
        <PSlider />
        <Siderbar />
      </div>
    </>
  );
};

export default Home;
