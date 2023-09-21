import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div
          className="text-white text-1xl font-semibold"
          style={{
            cursor: "pointer",
          }}
        >
          <span className="text-xl pr-2">&copy;</span>
          TrekTheTech 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;
