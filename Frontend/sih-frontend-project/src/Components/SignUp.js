import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticleAnimation from "./ParticleAnimation";
import axios from "axios";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    // Add your sign-up logic here
    // Create a JSON object with the user data
    try {
      // console.log("Sign up:", formData);

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/signup",
        formData
      );
      // console.log(response.data);
      if (response.data.success) {
        navigate("/");
      }
      // Redirect to login page or any other page after successful sign-up
    } catch (error) {
      const errorMessage = error.response.data.error.explanation;
      alert(errorMessage);
      console.log(error);
    }

    // console.log("Sign up:", formData);
    // // Redirect to login page or any other page after successful sign-up
    // navigate("/");
  };

  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       document.body.style.overflow = "unset";
  //     };
  //   }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <ParticleAnimation />
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded shadow-md w-96 z-50">
        <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
          Welcome to Menta
          {/* Sign Up for Menta */}
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-slate-100 font-medium">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-slate-100 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-slate-100 font-medium"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-slate-100 font-medium"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div> */}
        <div className="mb-4">
          {/* Add more input fields for additional sign-up information */}
        </div>
        <div className="mb-4 flex justify-center">
          <button
            type="button"
            onClick={handleSignUp}
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
