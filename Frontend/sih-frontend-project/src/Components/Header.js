/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
const header = () => {
  return (
    <header className="bg-gray-800 z-[20] mx-auto flex flex-wrap w-full items-center justify-between border-b border-gray-500 p-4">
      {/* For sticky navbar */}
      {/* <header className="bg-gray-800 sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between border-b border-gray-500 p-5"> */}
      <Logo />
      <Nav />
    </header>
  );
};

export default header;
