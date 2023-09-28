import React from "react";
import logo from "../Images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Your Logo"
        className="w-22 h-16"
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Logo;
