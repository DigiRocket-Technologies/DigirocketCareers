

const Process = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C9F21D] mb-6">
            OUR LEARNING PROCESS
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 min-[850px]:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1: Get Certified */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/2 weeks of theory.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              2 Weeks of Theory
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Build a strong foundation with expert-led classes covering key AI
              concepts and tools.
            </p>
          </div>

          {/* Feature 2: Award-Winning LMS */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/international project.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              Hands-On International Projects
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Apply your skills on real-world global projects to gain practical,
              job-ready experience.
            </p>
          </div>

          {/* Feature 3: Most In-Depth Program */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/gaurenteed placement.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              Guaranteed Placement Assistance
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Get support with resume building, mock interviews, and direct
              connections to hiring partners.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[60%] text-center text-xl mt-6 mx-auto">
          Are you ready? Join our Digital Marketing Institute now. 
     </div>
     <div className="flex justify-center item-center mt-4">
            <button className="bg-[#C9F21D] hover:bg-[#C9F21D] cursor-pointer px-4 py-2 text-[black] text-lg rounded-lg font-medium transition-colors">
             START WITH FREE DEMO
            </button>
     </div>
    </section>
  );
};

export default Process;
