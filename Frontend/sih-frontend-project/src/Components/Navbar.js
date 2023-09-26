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

// function Navbar({ fixed }) {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <>
//       <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <a
//               className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
//               href="#pablo"
//             >
//               pink Tailwind Starter Kit
//             </a>
//             <button
//               className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id="example-navbar-danger"
//           >
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Share</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Tweet</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Pin</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
