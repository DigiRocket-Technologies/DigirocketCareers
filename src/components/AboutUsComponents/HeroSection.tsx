import {  Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-screen py-16  relative overflow-hidden">
      {/* Background decorative elements */}
      
      <div className="w-[90%] lg:w-[60%] mx-auto relative z-10">
        {/* Header with icon */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#c9f21d] rounded-full shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300">
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              ABOUT
            </span>{' '}
            <span className="bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] bg-clip-text text-transparent">
              US
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] mx-auto rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-lime-100 backdrop-blur-sm bg-opacity-95 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 text-center mb-8 font-light">
            In a world racing toward{' '}
            <span className="font-semibold text-[#c9f21d] relative">
              automation
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c9f21d] rounded-full"></div>
            </span>{' '}
            and{' '}
            <span className="font-semibold text-[#c9f21d] relative">
              intelligent systems
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c9f21d] rounded-full"></div>
            </span>
            , staying ahead means learning what matters most—
            <span className="font-bold text-gray-800"> Artificial Intelligence</span>.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 text-center font-light">
            That's why{' '}
            <span className="font-bold text-[#c9f21d] text-2xl md:text-3xl">
              SS Prodigy
            </span>{' '}
            was born: to equip learners with the{' '}
            <span className="font-semibold text-gray-800">skills</span>,{' '}
            <span className="font-semibold text-gray-800">confidence</span>, and{' '}
            <span className="font-semibold text-gray-800">real-world experience</span>{' '}
            needed to thrive in today's AI-driven job market.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;