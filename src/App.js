import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Components/nav/Header";
import Navbar from "./Components/nav/Navbar";
import Contact from "./Components/page/Contact";
import Home from "./Components/page/Home";

const App = () => {
  return (
    <div className=" flex container">
      <Navbar />
      <div className="px-9  mt-5 mb-[5px] w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
