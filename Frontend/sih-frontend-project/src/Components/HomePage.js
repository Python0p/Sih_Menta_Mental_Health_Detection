// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Navbar from "./Navbar";
// import emotion from "../Images/Emotion.jpg";
// import chatbot from "../Images/chatbot.jpg";
// import blind from "../Images/blind.jpg";
// import mentalHealth from "../Images/mentalHealth.jpg";
// import ThemeCard from "./ThemeCard";

// function HomePage() {
// const location = useLocation();
// const userid = location.state && location.state.userid;
// const navigate = useNavigate();

// const handleGetDiagnosed = () => {
//   navigate("/health-form", { state: { userid: userid } });
// };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-700 text-white">
//         {/* Our services */}
//         <div>
//           <div className="mx-auto w-full flex justify-center">
//             <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium px-1 h-7 text-small rounded-full border-default bg-default-100 text-warning">
//               {/* <span className="flex-1 text-inherit font-normal px-2">
//                 Our Services
//               </span> */}
//               <h2 className="text-3xl font-semibold mb-4 pt-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center">
//                 OUR SERVICES
//               </h2>
//             </div>
//           </div>
//           <div className="flex justify-center gap-16 flex-wrap">
//             <ThemeCard
//               imageUrl={mentalHealth}
//               themeName="Get Diagnosed"
//               destinationUrl="/health-form"
//             />
//             <ThemeCard
//               imageUrl={emotion}
//               themeName="Emotion Analysis"
//               destinationUrl="/emotion-analysis"
//             />
//             <ThemeCard
//               imageUrl={blind}
//               themeName="Mental Health - Blind"
//               destinationUrl="/health-form"
//             />
//             <ThemeCard
//               imageUrl={chatbot}
//               themeName="Chat Therapy"
//               destinationUrl="/emotion-analysis"
//             />
//             {/* Add more ThemeCard components with different themeName and imageUrl */}
//           </div>
//         </div>

//         {/* Section: Mental Health Info */}
//         <div className="container mx-auto py-8 text-slate-100">
//           <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center">
//             Mental Health Information
//           </h2>
//           <ul className="list-disc pl-6">
//             <li>
//               <strong>Self-Assessment Tools:</strong> Provide interactive
//               self-assessment questionnaires or quizzes that users can complete
//               to gauge their mental health status. Ensure they receive
//               personalized feedback and recommendations based on their
//               responses.
//             </li>
//             <li>
//               <strong>Mental Health Statistics:</strong> Share up-to-date
//               statistics and research findings related to mental health to raise
//               awareness and reduce stigma.
//             </li>
//             <li>
//               <strong>Therapy and Treatment Options:</strong> Discuss various
//               therapeutic approaches, including psychotherapy, medication, and
//               alternative therapies like mindfulness and meditation. Provide
//               resources for finding mental health professionals.
//             </li>
//             <li>
//               <strong>Professional Advice:</strong> Encourage users to consult
//               with mental health professionals for personalized guidance and
//               treatment. Include a directory of local mental health providers.
//             </li>
//             <li>
//               <strong>Accessibility:</strong> Ensure that your website is
//               accessible to people with disabilities, including those with
//               visual or hearing impairments.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "./Navbar";
import emotion from "../Images/Emotion.jpg";
import chatbot from "../Images/chatbot.jpg";
import blind from "../Images/blind.jpg";
import mentalHealth from "../Images/mentalHealth.jpg";
import ThemeCard from "./ThemeCard";

function HomePage() {
  // const location = useLocation();
  // const userid = location.state && location.state.userid;
  // const navigate = useNavigate();

  // const handleGetDiagnosed = () => {
  //   navigate("/health-form", { state: { userid: userid } });
  // };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-700 text-white">
        {/* Our services */}
        <div>
          <div className="mx-auto w-full flex justify-center">
            <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium px-1 h-7 text-small rounded-full border-default bg-default-100 text-warning">
              <h2 className="text-3xl font-semibold mb-4 pt-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center">
                OUR SERVICES
              </h2>
            </div>
          </div>
          {/* Add a gap between the heading and ThemeCards */}
          <div className="mt-12 mb-8 pt-10 flex justify-center gap-16 flex-wrap">
            <ThemeCard
              imageUrl={mentalHealth}
              themeName="Get Diagnosed"
              destinationUrl="/health-form"
            />
            <ThemeCard
              imageUrl={emotion}
              themeName="Emotion Analysis"
              destinationUrl="/emotion-analysis"
            />
            <ThemeCard
              imageUrl={blind}
              themeName="Mental Health - Blind"
              destinationUrl="/health-form"
            />
            <ThemeCard
              imageUrl={chatbot}
              themeName="Chat Therapy"
              destinationUrl="/emotion-analysis"
            />
            {/* Add more ThemeCard components with different themeName and imageUrl */}
          </div>
        </div>

        {/* Section: Mental Health Info */}
        <div className="container mx-auto py-8 text-slate-100">
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center">
            Mental Health Information
          </h2>
          <ul className="list-disc pl-6">
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
