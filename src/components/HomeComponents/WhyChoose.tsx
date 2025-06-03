const WhyChoose = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C9F21D] mb-6">
            WHY CHOOSE SS PRODIGY?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 min-[850px]:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1: Get Certified */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/certified1.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              GET CERTIFIED
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Earn a recognized AI certificate that strengthens your resume and
              boosts your job prospects.
            </p>
          </div>

          {/* Feature 2: Award-Winning LMS */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/learn from expert.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              Learn from Experts
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Train with professionals who work in AI daily and know what the
              industry really needs.
            </p>
          </div>

          {/* Feature 3: Most In-Depth Program */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/build real projects.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              Build Real Projects
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Gain hands-on experience by working on real-world projects you can
              showcase to employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
