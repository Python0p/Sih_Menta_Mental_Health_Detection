import React from "react";
import { useNavigate } from "react-router-dom";

function ThemeCard({ imageUrl, themeName, destinationUrl }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(destinationUrl);
  };
  return (
    <div className="justify-center items-center hover:scale-110 transform transition-transform">
      <div
        className="flex flex-col relative overflow-hidden height-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-none w-[max-content]"
        tabIndex="-1"
      >
        <div className="w-[200px] h-[200px] p-2">
          <button type="button" onClick={handleClick}>
            <img
              alt="Theme"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="100vw"
              srcSet={imageUrl}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            />
          </button>
          {/* <img
            alt="Theme"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            sizes="100vw"
            srcSet={imageUrl}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
              cursor: "pointer",
            }}
          /> */}
        </div>
        <div className="p-3 h-auto flex items-center color-inherit subpixel-antialiased bg-background/10 backdrop-blur backdrop-saturate-150 max-w-[max-content] my-2 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-0 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {/* <p className="font-bold text-center text-gray-900">{themeName}</p> */}
          <p className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
            {" "}
            {themeName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThemeCard;

// function App() {
//   return (
//     <div>
//       <div className="mx-auto w-full flex justify-center">
//         <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium px-1 h-7 text-small rounded-full border-default bg-default-100 text-warning">
//           <span className="flex-1 text-inherit font-normal px-2">Themes</span>
//         </div>
//       </div>
//       <h1 className="font-bold text-center text-4xl bg-clip-text text-transparent bg-gradient-to-br from-custom-gradient-start to-custom-gradient-end mt-2 mb-24">
//         Dive into Creativity.
//       </h1>
//       <div className="flex justify-center gap-16 flex-wrap max-w-[800px]">
//         <ThemeCard
//           imageUrl="/_next/image?url=%2F_themes%2Fmedical.png&w=3840&q=75"
//           themeName="Healthcare"
//         />
//         <ThemeCard
//           imageUrl="/_next/image?url=%2F_themes%2Fai.png&w=3840&q=75"
//           themeName="AIML"
//         />
//         {/* Add more ThemeCard components with different themeName and imageUrl */}
//       </div>
//     </div>
//   );
// }
