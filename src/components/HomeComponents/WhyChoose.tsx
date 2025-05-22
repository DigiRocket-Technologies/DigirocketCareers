
const WhyChoose = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C9F21D] mb-6">
            Why Choose DigiRocket?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            DigiRocket is awarded as the "Most Trusted Brand in Digital Education" 
            by WCRC (Leading Marketing Research Firm and Magazine).
          </p>
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
              Our curriculum is built on suggestions from over 450 corporates across Asia. 
              Get certified to add an edge to your CV.
            </p>
          </div>

          {/* Feature 2: Award-Winning LMS */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img src="/img/home/award winning1.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              AWARD-WINNING LMS
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              Learn through 24*7 interactive LMS with PPTs, Videos, Assignments, 
              Case Studies & Quizzes along with a progress tracker.
            </p>
          </div>

          {/* Feature 3: Most In-Depth Program */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
               <img src="/img/home/in depth modules1.svg" alt="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4">
              MOST IN-DEPTH PROGRAM
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl text-center leading-relaxed">
              50+ Modules, 321+ learning hours, followed by 2 online certification tests. 
              A training program that sets a benchmark.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
