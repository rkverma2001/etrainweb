import React from "react";

interface VideoProps {
  videoUrl: string;
}

const SneekPeek: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10"
      style={{ backgroundImage: "url('https://etrain.blr1.digitaloceanspaces.com/Icon/bgsection.svg')" }}
    >
      {/* Heading */}
      <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 text-center">
        Sneek Peek Into Courseware
      </h1>

      {/* Video Wrapper (Responsive) */}
      <div className="w-full max-w-[600px] aspect-video">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default SneekPeek;