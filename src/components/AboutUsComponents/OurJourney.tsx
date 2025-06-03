
import { Target,  Award, Brain, Zap, BarChart3, Bot } from 'lucide-react';

const OurJourney = () => {
  const courses = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "LLMs",
      description: "Master Large Language Models"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Generative AI",
      description: "Create with AI-powered tools"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Agentic AI",
      description: "Build intelligent AI agents"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast with data science"
    }
  ];

  

  return (
    <section className="w-screen py-20 bg-gradient-to-br from-white via-lime-50 to-lime-100 relative overflow-hidden">

      <div className="w-[90%] mx-auto relative z-10">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9f21d] to-lime-500 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-lime-100 transform group-hover:-translate-y-2 transition-all duration-500">
                <img
                  src="/img/about/shubh sir 2.png"
                  alt="Our Journey"
                  className="w-full h-[500px] object-cover object-center filter hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#c9f21d]/20 via-transparent to-transparent"></div>
                
                {/* Floating success badge */}
                <div className="absolute top-6 right-6 bg-[#c9f21d] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Success Story
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[55%]">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Our Journey &
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] bg-clip-text text-transparent">
                  What We Offer
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] rounded-full"></div>
            </div>

            {/* Journey Story */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-lime-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c9f21d] rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Beginning</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We started{' '}
                <span className="font-bold text-[#c9f21d]">SS Prodigy</span>{' '}
                with one goal: to create a learning platform that's not only{' '}
                <span className="font-semibold text-gray-800">accessible</span>, but also{' '}
                <span className="font-semibold text-gray-800">outcome-driven</span>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our very first batch proved what's possible—several students secured jobs at great companies, thanks to our{' '}
                <span className="font-semibold text-[#c9f21d]">practical training</span>{' '}
                and{' '}
                <span className="font-semibold text-[#c9f21d]">placement support</span>.
                Seeing the impact, we shifted our full focus to what the world needs most—
                <span className="font-bold text-gray-800"> AI skills</span>.
              </p>
            </div>

            {/* What We Offer Today */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-lime-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#c9f21d] rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">What We Offer Today</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, we offer specialized courses in cutting-edge AI technologies. Each course is built to be{' '}
                <span className="font-semibold text-[#c9f21d]">hands-on</span>,{' '}
                <span className="font-semibold text-[#c9f21d]">industry-relevant</span>, and backed by{' '}
                <span className="font-semibold text-[#c9f21d]">guaranteed placement assistance</span>.
              </p>

              {/* Course Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-lime-50 rounded-xl p-4 border border-lime-200 hover:bg-lime-100 hover:border-lime-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-[#c9f21d] rounded-lg flex items-center justify-center mr-3">
                        {course.icon}
                      </div>
                      <h4 className="font-bold text-gray-800">{course.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default OurJourney;