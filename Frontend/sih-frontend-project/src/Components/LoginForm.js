import React from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate("/home");
  };

  const handleSignUpClick = () => {
    navigate("/");
  };

  return (
    <form>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full border rounded-md bg-transparent border-gray-400 p-3"
        />
      </div>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded-md bg-transparent border-gray-400 p-3"
        />
      </div>
      <div className="flex justify-between mb-6">
        <label>
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <span className="text-blue-700 cursor-pointer">Forgot Password?</span>
      </div>
      <button
        className="block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px-8 rounded"
        onClick={handleSubmitClick}
      >
        Sign In
      </button>
      <div className="mt-4 text-center">
        Don't have an account yet?{" "}
        <Link to="/sign-up">
          <span
            className="text-blue-700 cursor-pointer"
            onClick={handleSignUpClick}
          >
            Sign up
          </span>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
