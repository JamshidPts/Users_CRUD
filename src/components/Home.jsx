import React, { useRef, useState } from "react";

function Home() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    const toggleSound = () => {
        if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
        }
    };

  return (
    <>
    <div className="relative w-full h-[910px] overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        src="src\assets\bmw.MP4"
      ></video>

      <button
        onClick={toggleSound}
        className="absolute bottom-5 right-5 px-4 py-2 bg-white/50 rounded-md text-black hover:bg-white transition"
      >
        {isMuted ? "Включить звук" : "Выключить звук"}
      </button>
    </div>  
    </>
  )
}

export default Home