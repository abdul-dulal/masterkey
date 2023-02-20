import React from "react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaSellcast } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/img/logo name.png";
const navItem = [
  { href: "/", icon: AiOutlineHome, label: "Home" },
  { href: "/", icon: AiOutlineCompass, label: "Explore" },
  { href: "/", icon: AiOutlineHeart, label: "Saved" },
  { href: "/", icon: AiOutlineShoppingCart, label: "Chat" },
  { href: "/", icon: FaSellcast, label: "Selling" },
  { href: "/", icon: AiOutlineUser, label: "Profile" },
  { href: "/", icon: BsStopwatch, label: "History" },
  { href: "/contact", icon: AiOutlineMessage, label: "Contact Us" },
  { href: "/", icon: AiOutlineSetting, label: "Setting" },
];
const Navbar = () => {
  return (
    <div className="flex relative">
      <nav className="h-screen w-[271px]  bg-white flex flex-col justify-between transition-width overflow-hidden sticky top-0 stick ">
        <ul>
          <img src={logo} className="mt-8 mb-4 object-cover" alt="" />
          {navItem.map((item) => {
            return (
              <Link key={item.href} to={item.href}>
                <p className="flex items-center gap-12  text-xl p-3 hover:scale-[0.98] transition">
                  <item.icon size={24} />
                  <span className="ml-2 leading-none">{item.label}</span>
                </p>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
