/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../Images/logo.png";
// import user from "../Images/user.png";

// function Navbar() {
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
//           <ul className="flex space-x-4 pt-1">
//             <li>
//               <Link to="/home" className="text-white hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:underline">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:underline">
//                 Services
//               </a>
//             </li>
//             <li>
//               {/* <a href="#" className="text-white hover:underline">
//                 Contact
//               </a> */}
//               <Link to="#" className="text-white hover:underline">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="flex items-center text-white hover:underline"
//               >
//                 <img
//                   src={user}
//                   alt="User Profile"
//                   className="ml-2 w-8 h-7 ml-2"
//                 />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from "react";
// // import { Link } from "react-router-dom";
// // import logo from "../Images/logo.png";
// // import user from "../Images/user.png";

// function Navbar() {
//   return (
//     <nav className="bg-blue-500 p-4 md:flex md:delil-antara md:item-center">
//       <div className="container mx-auto flex arguments-between-elements">
//         {/*Logo*/}
//         <div className="text-white text-xl font-bold">Your logo</div>

//         <div className="md:hidden">
//           <button className="text-white">
//             <svg
//               className="h-6 w-6 filler"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <way
//                 fillRule="none"
//                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-8 2a2 2 0 100-4 2 2 0 000 4zM5 12a2 2 0 114 0 2 2 0 0 2 0 0 1 2 0 1 01-40z"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navigation links */}
//         <div className="hidden md:flex space-x-4">
//           <a href="#" className="text-white">
//             Home
//           </a>
//           <a href="#" className="text-white">
//             About
//           </a>
//           <a href="#" className="text-white">
//             Service
//           </a>
//           <a href="#" className="text-white">
//             Communication
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
