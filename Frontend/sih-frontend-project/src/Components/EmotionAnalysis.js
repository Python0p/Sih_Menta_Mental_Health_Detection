import React, { useEffect } from "react";
import ParticleAnimation from "./ParticleAnimation";
import { useNavigate, useLocation } from "react-router-dom";

function EmotionAnalysis() {
  const location = useLocation();
  const predictionResult = location.state && location.state.prediction;
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/success", { state: { prediction: predictionResult } });
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const videoElement = document.getElementById("camera-preview");
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 pt-5 relative">
      <div className="container mx-auto px-4 pt-8 pb-8 z-10 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-4">
          <ParticleAnimation style={{ zIndex: -1 }} />
          {/* Camera Preview */}
          <video
            id="camera-preview"
            autoPlay
            className="w-full h-auto rounded-lg shadow-md relative"
          ></video>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-gray-800 bg-opacity-75 p-4 rounded shadow-md relative">
            <h3 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
              Emotion Analyst
            </h3>

            <div className="text-slate-100">
              <p>
                Sarah sat in her favorite corner of the bustling coffee shop,
                her fingers gently tracing the rim of her coffee cup. Her hazel
                eyes were fixed on the window, where raindrops raced down the
                glass, leaving intricate trails in their wake. She appeared lost
                in thought, her brow occasionally furrowing, revealing a hint of
                confusion. A warm latte sat untouched in front of her, its steam
                dancing upward, unnoticed. Sarah's posture was relaxed, yet her
                fingers twitched slightly, betraying a subtle nervous energy
                that coursed through her. She glanced at her phone, but her gaze
                lingered there for only a moment before returning to the window.
                The bell above the café door chimed, and Sarah's gaze flickered
                toward the entrance. A man in a blue coat entered, shaking off
                the rain from his umbrella. He scanned the room, his face a mask
                of anticipation. His eyes, a deep shade of brown, found Sarah's
                corner, and a fleeting smile crossed his lips. Sarah's heart
                skipped a beat, her fingers stilling on her coffee cup. As he
                approached, Sarah's lips curved into a polite smile, her cheeks
                tinged with a hint of pink. She rose from her seat, the chair
                scraping softly against the floor. Their embrace was a mixture
                of familiarity and restraint, suggesting a relationship in
                transition. Sarah's hand rested on his arm for a moment, her
                fingers tracing invisible patterns on his coat sleeve. They
                settled into a rhythm of conversation, the words flowing easily
                between them. Sarah's eyes sparkled with laughter as they
                reminisced about shared memories. Her gestures became more
                animated, punctuating her stories with expressive movements of
                her hands. Yet, beneath the laughter and the smiles, there was a
                subtle tension. Sarah's fingers occasionally strayed to the
                delicate silver necklace around her neck, a nervous habit
                betraying an unspoken concern. Her eyes would dart toward her
                phone, checking the time, as if aware of an impending deadline.
                The man in the blue coat remained attentive, his eyes
                unwaveringly fixed on Sarah's face. He leaned in, his voice
                lowered, and Sarah's expression grew serious. Her brow furrowed
                as they delved into a deeper, more earnest conversation. She
                listened intently, her fingers now resting on her chin, lost in
                contemplation. The rain outside had subsided, and the café had
                grown quieter. Sarah and her companion sat in a bubble of
                conversation, their words a bridge connecting their emotions. As
                they spoke, Sarah's fingers gradually relaxed their hold on her
                coffee cup, finally lifting it to take a sip. As their meeting
                drew to a close, Sarah's smile returned, this time tinged with a
                sense of contentment. The man in the blue coat paid the bill,
                and they stood to leave. Their parting was gentle, a hug infused
                with warmth and a lingering promise of future connection. Back
                in her corner, Sarah sat alone once more, her emotions a subtle
                landscape of transitions. Her fingers, now at rest, traced the
                rim of her empty coffee cup, her hazel eyes once again fixed on
                the window. The rain had stopped, leaving behind a world
                glistening with possibility.
              </p>
            </div>

            <div className="mb-4 flex justify-center pt-8">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded hover:bg-gradient-to-l from-blue-500 to-purple-700 focus:outline-none focus:bg-blue-600 mr-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmotionAnalysis;
