import {
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Cog,
  Database,
  
  Monitor,
  
  Users,
  
} from "lucide-react";
import HomeNavbar from "../../components/HomeComponents/HomeNavbar";
import Skills from "../../components/ProgramComponents/Skills";
import { useEffect, useState } from "react";
import Testimonials from "../../components/HomeComponents/Testimonials";
import Footer from "../../components/Footer";
import AgenticCurriculum from "../../components/ProgramComponents/AgentIcCirriculum";

const AgenticAI = () => {
  const [activeSection, setActiveSection] = useState("capstone");
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const projectOptions = [
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Complete Marketing Automation Suite",
      description:
        "Build an end-to-end marketing automation system with email, WhatsApp, and calling capabilities",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI-Powered Content Factory",
      description:
        "Create a fully automated content creation, optimization, and distribution system",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Channel Customer Engagement Platform",
      description:
        "Develop an integrated system for customer communication across all channels",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Enterprise Process Automation",
      description:
        "Build a comprehensive business process automation solution with AI integration",
    },
  ];

  const assessmentMethods = [
    "Weekly practical assignments and mini-projects",
    "Module-end comprehensive projects",
    "Peer reviews and collaboration exercises",
    "Final capstone presentation and demo",
    "Portfolio of automation workflows created",
  ];

  const prerequisites = [
    "Basic computer literacy and internet familiarity",
    "Understanding of business processes (helpful but not required)",
    "No programming experience required (course covers both code and no-code approaches)",
    "Basic understanding of digital marketing concepts (helpful but not required)",
  ];

  const sections = [
    {
      id: "capstone",
      label: "Capstone Project",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      id: "assessment",
      label: "Assessment",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "prerequisites",
      label: "Prerequisites",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "details",
      label: "Course Details",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <HomeNavbar />
      <div className="w-screen py-10">
        <div className="w-[60%] mx-auto text-4xl text-center font-bold">
          Agentic AI: Learn Process Automation - Complete Course 
        </div>
        <div className="w-[60%] mt-4 mx-auto text-xl text-center">
          Master the art of intelligent process automation using AI agents, from
          understanding core concepts to building sophisticated marketing
          automation systems that work autonomously.
        </div>
        
      </div>
      <AgenticCurriculum />
      <Skills start={8} end={16}/>
      <div className="min-h-screen  bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r  py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">
                Course Completion
                <span className="">
                  {" "}
                  Requirements
                </span>
              </h1>
              <p className="text-xl  max-w-3xl mx-auto">
                Master automation and AI integration through comprehensive
                projects designed to demonstrate your expertise in building
                intelligent business solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center  bg-white border-b border-gray-200 z-10 py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex space-x-8 overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? "border-lime-400 text-gray-900"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}
                  style={{
                    borderBottomColor:
                      activeSection === section.id ? "#c9f21d" : undefined,
                  }}
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
          {activeSection === "capstone" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Final Capstone Project
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Students must complete a comprehensive project that
                  demonstrates mastery of all modules
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projectOptions.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    style={{
                      boxShadow: "0 0 0 0 rgba(201, 242, 29, 0)",
                      transition: "all 0.5s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px -12px rgba(201, 242, 29, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 0 0 rgba(201, 242, 29, 0)";
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#c9f21d" }}
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

          {activeSection === "assessment" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Assessment Methods</h2>
                <p className="text-xl text-gray-600">
                  Multiple evaluation methods ensure comprehensive skill
                  development
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
                      style={{ backgroundColor: "#c9f21d" }}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">
                      {method}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "prerequisites" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Prerequisites</h2>
                <p className="text-xl text-gray-600">
                  Essential knowledge and skills needed before starting the
                  course
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
                      style={{ backgroundColor: "#c9f21d" }}
                    >
                      <Code className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-gray-700 leading-relaxed">
                      {prereq}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "details" && (
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
                      style={{ backgroundColor: "#c9f21d" }}
                    >
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Duration
                      </h3>
                      <p className="text-gray-600">Total course length</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    18-24 weeks
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-gray-900"
                      style={{ backgroundColor: "#c9f21d" }}
                    >
                      <Monitor className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Format
                      </h3>
                      <p className="text-gray-600">Learning delivery method</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-gray-900">
                    Online and Offline
                  </p>
                  <p className="text-lg text-gray-600 mt-2">mentor training</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default AgenticAI;
