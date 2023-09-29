/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import logo from "../Images/logo.png";

// function WelcomeNavbar() {
//   return (
//     <nav
//       className="bg-gray-800 p-2"
//       style={{ position: "relative", zIndex: 99 }}
//     >
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <div className="text-white text-2xl font-semibold pt-1">
//             <img
//               src={logo}
//               alt="Your Logo"
//               className="w-22 h-16"
//               style={{
//                 cursor: "pointer",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default WelcomeNavbar;

import React from "react";
import Logo from "./Logo";
const header = () => {
  return (
    <header className="bg-gray-800 z-[20] mx-auto flex flex-wrap w-full items-center justify-between border-b border-gray-500 p-4">
      <Logo />
      {/* <Nav /> */}
    </header>
  );
};

export default header;
