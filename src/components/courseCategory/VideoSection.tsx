const VideoSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Adobebadges/AdobeCategoryLogo.svg"
            className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
            alt="Adobe Category Logo"
          />

          <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              Adobe Certified Professional is the industry-recognized
              certification that demonstrates mastery of Adobe Creative Cloud
              software and must-have knowledge for digital media careers. Each
              exam is integrated with an Adobe application and designed by
              experts, allowing for an authentic assessment of job-ready skills.
            </p>

            <p className="mt-3 sm:mt-4">
              EtrainIndia provides a full pathway solution that students can use
              to prepare for the Adobe Certified Professional certification.
              From tailored learning materials and practice tests to Adobe
              endorsed certification exams, EtrainIndia provides assistance
              every step of the way.
            </p>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="w-full md:w-1/2">
          <div className="w-full aspect-video border-2 rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/adobe.mp4"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoSection;