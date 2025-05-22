import { Play } from 'lucide-react';

const AwardWinning = () => {
 return (
    <section className="relative  overflow-hidden min-h-screen">
      {/* Diagonal geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-0 right-0 w-3/4 h-full  transform skew-x-12 origin-top-right"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-3/4  transform -skew-x-12 origin-bottom-right"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="hidden lg:block text-black space-y-6">
            {/* Orange Badge */}
            <div className="inline-block">
              <span className="bg-[#C9F21D] text-black px-6 py-3 rounded-lg font-semibold text-sm">
                Theory, Live Practical & Implementation
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Award Winning LMS – DOLMS!
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lg lg:text-xl">
              <p>
                High-quality explainer videos of all topics. Learn on desktop or mobile-based on preferences
              </p>
              <p>
                also you can track your learning progress with SMART tracker.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#C9F21D] hover:bg-orange-600  px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 transition-colors duration-300 group">
                <span>Watch the Video</span>
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side - Device Mockups */}
          <div className="relative">
             <img src="/img/home/frame.png"  alt="" />
          </div>

            <div className="block w-[90%] mx-auto lg:hidden text-black space-y-6">
            {/* Orange Badge */}
            <div className="inline-block">
              <span className="bg-[#C9F21D] text-black px-6 py-3 rounded-lg font-semibold text-sm">
                Theory, Live Practical & Implementation
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Award Winning LMS – DOLMS!
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lg lg:text-xl">
              <p>
                High-quality explainer videos of all topics. Learn on desktop or mobile-based on preferences
              </p>
              <p>
                also you can track your learning progress with SMART tracker.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#C9F21D] hover:bg-orange-600  px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 transition-colors duration-300 group">
                <span>Watch the Video</span>
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardWinning
