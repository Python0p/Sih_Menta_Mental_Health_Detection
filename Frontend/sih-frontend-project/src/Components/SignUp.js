// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ParticleAnimation from "./ParticleAnimation";
// import axios from "axios";
// import WelcomeNavbar from "./WelcomeNabvbar";

// function SignUpPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSignUp = async () => {
//     // Add your sign-up logic here
//     // Create a JSON object with the user data
//     try {
//       // console.log("Sign up:", formData);

//       const response = await axios.post(
//         "http://localhost:3001/api/v1/user/signup",
//         formData
//       );
//       // console.log(response.data);
//       if (response.data.success) {
//         navigate("/");
//       }
//       // Redirect to login page or any other page after successful sign-up
//     } catch (error) {
//       const errorMessage = error.response.data.error.explanation;
//       alert(errorMessage);
//       console.log(error);
//     }

//     // console.log("Sign up:", formData);
//     // // Redirect to login page or any other page after successful sign-up
//     // navigate("/");
//   };

//   return (
//     <>
//       <WelcomeNavbar></WelcomeNavbar>
//       <div className="flex items-center justify-center min-h-screen bg-gray-700">
//         <ParticleAnimation />
//         <div className="bg-gray-800 bg-opacity-75 p-8 rounded shadow-md w-96 z-50">
//           <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
//             Welcome to Menta
//             {/* Sign Up for Menta */}
//           </h2>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-slate-100 font-medium">
//               Full Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-slate-100 font-medium">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-slate-100 font-medium"
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             {/* Add more input fields for additional sign-up information */}
//           </div>
//           <div className="mb-4 flex justify-center">
//             <button
//               type="button"
//               onClick={handleSignUp}
//               className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUpPage;

// import React from "react";
// import WelcomeNavbar from "./WelcomeNabvbar";
// import SignUpForm from "./SignUpForm";
// import LoginBg from "../Images/LoginBg.jpg";

// function SignUp() {
//   return (
//     <>
//       <WelcomeNavbar></WelcomeNavbar>
//       <div className="flex flex-col flex-auto w-full h-screen">
//         <div className="h-full">
//           <div className="grid lg:grid-cols-3 h-full">
//             <div
//               className="bg-blue-900 bg-cover lg:flex bg-no-repeat hidden "
//               style={{ backgroundImage: `url(${LoginBg}` }}
//             ></div>
//             <div className="col-span-2 flex justify-center items-center">
//               <div className="min-w-[450px] px-8">
//                 <div className="mb-8">
//                   <h1 className="text-3xl font-medium">Welcome to Menta</h1>
//                   <p>Create an account!</p>
//                 </div>
//                 <SignUpForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;

// import React from "react";
// import WelcomeNavbar from "./WelcomeNabvbar";
// import SignUpForm from "./SignUpForm";
// import LoginBg from "../Images/LoginBg.jpg";

// function SignUp() {
//   return (
//     <>
//       <WelcomeNavbar></WelcomeNavbar>
//       <div className="flex flex-col flex-auto w-full h-screen">
//         <div className="h-full">
//           <div className="grid lg:grid-cols-3 h-full">
//             <div className="col-span-2 flex justify-center items-center">
//               <div className="min-w-[450px] px-8">
//                 <div className="mb-8">
//                   <h1 className="text-3xl font-medium">Welcome to Menta</h1>
//                   <p>Create an account!</p>
//                 </div>
//                 <SignUpForm />
//               </div>
//             </div>
//             <div
//               className="bg-blue-900 bg-cover lg:flex bg-no-repeat hidden "
//               style={{
//                 backgroundImage: `url(${LoginBg}`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;

import React from "react";
// import WelcomeNavbar from "./WelcomeNavbar";
import WelcomeNavbar from "./WelcomeNabvbar";
import SignUpForm from "./SignUpForm";
import LoginBg from "../Images/LoginBg.jpg";

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <WelcomeNavbar />
      <div className="flex-1 grid lg:grid-cols-3">
        <div className="col-span-2 flex justify-center items-center">
          <div className="min-w-[450px] px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-medium">Welcome to Menta</h1>
              <p>Create an account!</p>
            </div>
            <SignUpForm />
          </div>
        </div>
        <div
          className="bg-blue-900 bg-cover lg:flex bg-no-repeat hidden"
          style={{
            backgroundImage: `url(${LoginBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SignUp;
