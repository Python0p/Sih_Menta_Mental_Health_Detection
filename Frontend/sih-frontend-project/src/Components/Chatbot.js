import React from "react";
import ParticleAnimation from "./ParticleAnimation";
// import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

function Chatbot() {
  //   const location = useLocation();
  //   const predictionResult = location.state && location.state.prediction;

  //   const navigate = useNavigate();

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <div className="flex items-center justify-center flex-col min-h-screen bg-gray-700 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ParticleAnimation />
        </div>
        <div className="bg-gray-800 p-8 rounded shadow-md w-1/2 relative z-10 bg-opacity-75">
          <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
            Chatbot User Consent
          </h2>
          <p className="text-white flex justify-center">
            By using our services, you consent to the responsible use of your
            personal data. We assure you that your information will not be
            misused, shared, or stored for any unauthorized purposes. Your
            privacy and security are our utmost priority. Rest assured, your
            data will only be used for the intended purpose you provide it for,
            and will not be disclosed to any third parties without your explicit
            consent. We adhere to strict confidentiality standards to safeguard
            your information. If you have any concerns or wish to learn more
            about our data practices, please contact us. Thank you for trusting
            us with your information.
          </p>
        </div>
        <div className="mb-4 pt-5 z-50">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
            onClick={() => (window.location.href = "http://127.0.0.1:5000/")}
            // onClick={() =>
            //   (window.location.href = "http://172.31.114.60:5000/")
            // }
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
