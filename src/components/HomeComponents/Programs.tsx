import {
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";



const Programs = () => {

  const navigate=useNavigate();

  return (
    <>
      <section id="courses" className="bg-gray-50 py-16 px-4">
        
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C9F21D] mb-6 leading-tight">
              COURSE SNAPSHOT
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Explore four industry-ready AI courses designed to make you
              job-ready fast. From LLMs to Predictive Analytics, get the skills
              top companies need today.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Data Science Card */}
            <div onClick={()=>navigate("/course/llm-master")} className="group relative min-h-[300px] bg-gray-800 rounded-2xl p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9F21D] rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C9F21D] rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>

              <div className="relative z-10">
                {/* Category Badge */}

                {/* Card Title */}
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  LLM Master Course :
                  <br />
                   Learn all about LLMs
                </h3>

                {/* Know More Button */}
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group-hover:translate-x-2 transform transition-transform duration-300">
                  <span className="text-lg font-medium">Know More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div onClick={()=>navigate("/course/agentic-ai")} className="group relative min-h-[300px] bg-[#C9F21D] rounded-2xl p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>

              <div className="relative z-10">
              

                {/* Card Title */}
                <h3 className="text-black text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Agentic AI : 
                  <br />
                  Learn process Automation
                </h3>

                {/* Know More Button */}
                <button className="flex items-center space-x-2 text-black hover:text-gray-100  group-hover:translate-x-2 transform transition-transform duration-300">
                  <span className="text-lg font-medium">Know More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid mt-6 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Data Science Card */}
            <div onClick={()=>navigate("/course/predictive-analysis-using-data-science-and-ai")} className="group  relative min-h-[300px] bg-gray-800 rounded-2xl p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9F21D] rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C9F21D] rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>

              <div className="relative z-10">
                {/* Category Badge */}
                

                {/* Card Title */}
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
                 Predictive Analysis 
                  <br />
                  Using Data Science And Ai
                </h3>

                {/* Know More Button */}
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group-hover:translate-x-2 transform transition-transform duration-300">
                  <span className="text-lg font-medium">Know More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div onClick={()=>navigate("/course/mastering-generative-ai")} className="group  relative min-h-[300px] bg-[#C9F21D] rounded-2xl p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>

              <div className="relative z-10">
                {/* Category Badge */}
               
                {/* Card Title */}
                <h3 className="text-black text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Mastering Generative AI: 
                  <br />
                  Images, Content And It's Application
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
    </>
  );
};

export default Programs;
