import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSliders, BsBellFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <div>
        <h1 className="text-3xl font-normal text-black">Headphone</h1>
        <p>For the top band</p>
      </div>
      <div className="flex  items-center gap-7">
        <p className="flex gap-2 py-2 px-2 items-center border-2 bg-[rgba(0, 0, 0, 0.25)] rounded-[10px] cursor-pointer ">
          <AiOutlineSearch />
          <input
            type="text"
            name=""
            id=""
            className="focus:outline-none"
            placeholder="Search Product"
          />
          <BsSliders />
        </p>
        <div className="flex gap-4">
          <MdEmail className="bg-yellow-300 rounded-md w-12 h-12 p-2" />
          <BsBellFill className="bg-yellow-300 rounded-md w-12 h-12 p-2" />
          <FaUserAlt className="bg-yellow-300 rounded-md w-12 h-12 p-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
