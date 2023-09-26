import React from "react";
import logo from "../Images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Your Logo"
        className="w-20 h-10"
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Logo;
