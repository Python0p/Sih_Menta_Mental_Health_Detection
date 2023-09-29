import React from "react";
function ButtonComponent() {
  return (
    <button className="relative overflow-hidden group">
      <span className="absolute inset-0 bg-purple-700 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></span>
      <span className="relative z-10">Hover me</span>
    </button>
  );
}

export default ButtonComponent;
