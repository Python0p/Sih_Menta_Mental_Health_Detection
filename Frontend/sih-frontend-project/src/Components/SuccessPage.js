import React from "react";
import ParticleAnimation from "./ParticleAnimation";
import { useNavigate, useLocation } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  const predictionResult = location.state && location.state.prediction;

  const navigate = useNavigate();

  const handleGoToLogIn = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-gray-700">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ParticleAnimation />
        </div>
        <div className="bg-gray-800 p-8 rounded shadow-md w-96 relative z-10 bg-opacity-75">
          <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
            Prediction Result
          </h2>
          <p className="text-white flex justify-center">
            The prediction result for mental health is:{" "}
            <strong>{predictionResult}</strong>
          </p>
        </div>
        <div className="mb-4 pt-5 z-50">
          <button
            type="button"
            onClick={handleGoToLogIn}
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
          >
            Go to LogIn
          </button>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
