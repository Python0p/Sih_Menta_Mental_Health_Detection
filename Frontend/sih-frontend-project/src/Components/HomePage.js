import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import caraosel1 from "../Images/caraousel-1.jpg";
import caraosel2 from "../Images/caraousel-2.jpg";
import caraosel3 from "../Images/caraousel-3.jpg";

function HomePage() {
  const location = useLocation();
  const userid = location.state && location.state.userid;
  const navigate = useNavigate();

  const handleGetDiagnosed = () => {
    // console.log("Button Clicked");
    navigate("/health-form", { state: { userid: userid } });
  };

  return (
    <>
      <div className="relative min-h-screen bg-gray-700">
        {/* Carousel */}
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img
              src={caraosel1}
              alt=""
              style={{
                width: "100%",
                height: "645px",
              }}
            />
          </div>
          <div>
            <img
              src={caraosel2}
              alt="I"
              style={{
                width: "100%",
                height: "645px",
              }}
            />
          </div>
          <div>
            <img
              src={caraosel3}
              alt=""
              style={{
                width: "100%",
                height: "645px",
              }}
            />
          </div>
        </Carousel>

        {/* Buttons */}
        <div className="mb-4 flex justify-evenly pt-10">
          <button
            type="button"
            onClick={handleGetDiagnosed}
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
          >
            Get Diagnosed
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "http://127.0.0.1:5000/")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-l from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-blue-500 to-purple-700 focus:outline-none focus:bg-red-600"
          >
            Try our AI chatbot
          </button>
        </div>

        {/* Section: Mental Health Info */}
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center">
            Mental Health Information
          </h2>
          <ul className="list-disc text-slate-100 pl-6">
            <li>
              <strong>Self-Assessment Tools:</strong> Provide interactive
              self-assessment questionnaires or quizzes that users can complete
              to gauge their mental health status. Ensure they receive
              personalized feedback and recommendations based on their
              responses.
            </li>
            <li>
              <strong>Mental Health Statistics:</strong> Share up-to-date
              statistics and research findings related to mental health to raise
              awareness and reduce stigma.
            </li>
            <li>
              <strong>Therapy and Treatment Options:</strong> Discuss various
              therapeutic approaches, including psychotherapy, medication, and
              alternative therapies like mindfulness and meditation. Provide
              resources for finding mental health professionals.
            </li>
            <li>
              <strong>Professional Advice:</strong> Encourage users to consult
              with mental health professionals for personalized guidance and
              treatment. Include a directory of local mental health providers.
            </li>
            <li>
              <strong>Accessibility:</strong> Ensure that your website is
              accessible to people with disabilities, including those with
              visual or hearing impairments.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
