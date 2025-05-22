import { ChevronRight,Lightbulb,CheckCircle,Monitor,Users,Play } from "lucide-react";
const Programs = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C9F21D] mb-6 leading-tight">
              DigiRocket Certified Programs.
              <br />
              Join The Next Revolution Now!
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              DigiRocket, as a Leading Digital Marketing Courses &
              Certification Academy, provides value-for-money courses which you
              can afford at the best price in the market. 57,000+ DigiRocketers
              got a placement with DigiRocket Certifications in top brands.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Data Science Card */}
            <div className="group relative bg-gray-800 rounded-2xl p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9F21D] rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C9F21D] rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block mb-6">
                  <span className="bg-[#C9F21D] text-black px-4 py-2 rounded-lg text-sm font-semibold">
                    Data Science
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Data Science,
                  <br />
                  AI & AI Automation
                </h3>

                {/* Know More Button */}
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group-hover:translate-x-2 transform transition-transform duration-300">
                  <span className="text-lg font-medium">Know More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div className="group relative bg-[#C9F21D] rounded-2xl p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block mb-6">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Digital Marketing
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-black text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Digital Marketing Specialization
                  <br />
                </h3>

                {/* Know More Button */}
                <button className="flex items-center space-x-2 text-black hover:text-gray-100 transition-colors group-hover:translate-x-2 transform transition-transform duration-300">
                  <span className="text-lg font-medium">Know More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Feature 1: Innovative Ideas */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12  rounded-full flex items-center justify-center mt-1">
                <Lightbulb className="w-6 h-6 text-[#C9F21D]" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Innovative ideas are really important to make you different
                  from others. DigiRocket involves innovative ideologies for
                  imparting knowledge and skills to our trainees.
                </p>
              </div>
            </div>

            {/* Feature 2: Quality Training */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  The quality of training is the key foundation of any
                  institute. We are highly concerned towards quality. Our course
                  modules are consistent and meet industry standards.
                </p>
              </div>
            </div>

            {/* Feature 3: Practical Learning */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mt-1">
                <Monitor className="w-6 h-6 text-[#C9F21D]" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We believe in practical learning, and provides live training
                  sessions and helped students understand each concept
                  effectively in depth way..
                </p>
              </div>
            </div>

            {/* Feature 4: Job Assistance */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  DigiRocket as a leading Digi Marketing Institute provides
                  100% job assistance to our students.We tied up with several
                  organizations for Job placements.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
              Are you ready? Join our Digital Marketing Institute now.
            </h3>

            <button className="bg-[#C9F21D] hover:bg-[#C9F21D] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 mx-auto transition-colors duration-300 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Start with a Free Demo</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
