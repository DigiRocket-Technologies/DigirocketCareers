import { CheckCircle, Clock, Code, Cog, Database, Laptop, Monitor, Users } from "lucide-react";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import Course from "../components/ProgramComponents/Course";
import Skills from "../components/ProgramComponents/Skills";
import { useState } from "react";
import Testimonials from "../components/HomeComponents/Testimonials";
import Footer from "../components/Footer";

const LLMMaster = () => {
  const [activeSection, setActiveSection] = useState('capstone');
  
  const projectOptions = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Fine-tuned Model",
      description: "Build and deploy a domain-specific fine-tuned LLM"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Advanced RAG System",
      description: "Create a production-ready RAG application with complex data sources"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Automated AI Pipeline",
      description: "Develop a complete no-code automation system using n8n"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "LLM Application",
      description: "Build a full-stack application incorporating multiple LLM concepts"
    }
  ];

  const assessmentMethods = [
    "Weekly practical assignments",
    "Module-end projects",
    "Peer code reviews",
    "Final capstone presentation",
    "Portfolio of completed projects"
  ];

  const prerequisites = [
    "Basic programming knowledge (any language)",
    "Familiarity with APIs and web services",
    "Understanding of basic machine learning concepts (helpful but not required)"
  ];
  
  const sections = [
    { id: 'capstone', label: 'Capstone Project', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'assessment', label: 'Assessment', icon: <Users className="w-5 h-5" /> },
    { id: 'prerequisites', label: 'Prerequisites', icon: <Code className="w-5 h-5" /> },
  ];
  return (
    <>
      <HomeNavbar />
      <div className="w-screen py-10">
        <div className="w-[60%] mx-auto text-4xl text-center font-bold">
          LLM Master Course: Learn all about LLMs
        </div>
        <div className="w-[60%] mt-4 mx-auto text-xl text-center">
          Master the fundamentals of Large Language Models, from understanding
          core concepts to building production-ready AI applications through
          fine-tuning and automation.
        </div>
        <div className="flex mt-4 justify-center items-center">
          <button className="bg-[#C9F21D] hover:bg-[#C9F21D] cursor-pointer px-4 py-2 text-[black] text-lg rounded-lg font-medium transition-colors">
            GET BROCHURE
          </button>
        </div>
      </div>
      <Course />
      <Skills />
      <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="ext-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Course Completion 
              <span className=""> Requirements</span>
            </h1>
            <p className="text-xl  max-w-3xl mx-auto">
              Master all modules through comprehensive projects and assessments designed to demonstrate your expertise in LLM development and deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className=" bg-white border-b py-6 border-gray-200 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'border-lime-400 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
                style={{ borderBottomColor: activeSection === section.id ? '#c9f21d' : undefined }}
              >
                {section.icon}
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeSection === 'capstone' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Final Capstone Project</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Students must complete a comprehensive project that demonstrates mastery of all modules
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projectOptions.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    boxShadow: '0 0 0 0 rgba(201, 242, 29, 0)',
                    transition: 'all 0.5s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(201, 242, 29, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 0 rgba(201, 242, 29, 0)';
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#c9f21d' }}
                  >
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'assessment' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Assessment Methods</h2>
              <p className="text-xl text-gray-600">
                Multiple evaluation methods ensure comprehensive skill development
              </p>
            </div>

            <div className="grid gap-6">
              {assessmentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#c9f21d' }}
                  >
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{method}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'prerequisites' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Prerequisites</h2>
              <p className="text-xl text-gray-600">
                Essential knowledge and skills needed before starting the course
              </p>
            </div>

            <div className="grid gap-6">
              {prerequisites.map((prereq, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 mt-1 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#c9f21d' }}
                  >
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">{prereq}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'details' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Course Details</h2>
              <p className="text-xl text-gray-600">
                Duration, format, and additional course information
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-gray-900"
                    style={{ backgroundColor: '#c9f21d' }}
                  >
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Duration</h3>
                    <p className="text-gray-600">Total course length</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">18-24 weeks</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-gray-900"
                    style={{ backgroundColor: '#c9f21d' }}
                  >
                    <Monitor className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Format</h3>
                    <p className="text-gray-600">Learning delivery method</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-gray-900">Online and Offline</p>
                <p className="text-lg text-gray-600 mt-2">mentor training</p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default LLMMaster;
