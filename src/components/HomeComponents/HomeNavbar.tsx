import { useState } from "react";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="text-black">
      {/* Top contact bar */}

      {/* Main navbar */}
      <div className="px-4 py-6 border-b-[white] border-b-[1px] shadow-md">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            {" "}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/img/home/logo.png" className="w-[60px]" alt="" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-lg space-x-8">
            <Link
              to="/"
              className="hover:text-[#C9F21D] transition-colors font-medium"
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              className="hover:text-[#C9F21D] transition-colors font-medium"
            >
              ABOUT US
            </Link>

            {/* Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 hover:text-[#C9F21D] transition-colors font-medium"
              >
                <span>OUR PROGRAMS</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Items */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0  w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/course/llm-master"
                      className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 hover:text-[#C9F21D] transition-colors"
                    >
                      LLM Master Course: Learn all about LLMs
                    </Link>
                    <Link
                      to="/course/agentic-ai"
                      className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 hover:text-[#C9F21D] transition-colors"
                    >
                      Agentic AI: Learn process Automation
                    </Link>
                    <Link
                      to="/course/predictive-analysis-using-data-science-and-ai"
                      className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 hover:text-[#C9F21D] transition-colors"
                    >
                      Predictive analysis using data science and ai
                    </Link>
                    <Link
                      to="/course/mastering-generative-ai"
                      className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 hover:text-[#C9F21D] transition-colors"
                    >
                      Mastering Generative AI: images, content and it's
                      application
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              className="hover:text-[#C9F21D] transition-colors font-medium"
            >
              CONTACT US
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-[#C9F21D] hover:bg-[#C9F21D] cursor-pointer px-4 py-2 text-[black] text-lg rounded-lg font-medium transition-colors">
              REQUEST A BROCHURE
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 mt-4">
              <a
                href="/"
                className="hover:text-[#C9F21D] transition-colors font-medium py-2"
              >
                HOME
              </a>
              <Link
                to="/about-us"
                className="hover:text-[#C9F21D] transition-colors font-medium py-2"
              >
                ABOUT US
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full hover:text-[#C9F21D] transition-colors font-medium py-2"
                >
                  <span>OUR PROGRAMS</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown Items */}
                {isDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/course/llm-master"
                      className="block py-2 text-sm hover:text-[#C9F21D] transition-colors"
                    >
                      LLM Master Course: Learn all about LLMs
                    </Link>
                    <Link
                      to="/course/agentic-ai"
                      className="block py-2 text-sm hover:text-[#C9F21D] transition-colors"
                    >
                      Agentic AI: Learn process Automation
                    </Link>
                    <Link
                      to="/predictive-analysis-using-data-science-and-ai"
                      className="block py-2 text-sm hover:text-[#C9F21D] transition-colors"
                    >
                      Predictive analysis using Data Science and AI
                    </Link>
                    <Link
                      to="/course/mastering-generative-ai"
                      className="block py-2 text-sm hover:text-[#C9F21D] transition-colors"
                    >
                      Mastering Generative AI: images, content and it's
                      application
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact-us"
                className="hover:text-[#C9F21D] transition-colors font-medium py-2"
              >
                CONTACT US
              </Link>

              {/* Mobile contact info */}
              <div className="md:hidden flex items-center space-x-2 py-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>contact@SS Prodigy.org</span>
              </div>

              {/* Mobile buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <button className="bg-[#C9F21D] hover:bg-[#C9F21D] px-6 py-3 rounded-full font-medium transition-colors">
                  REQUEST A BROCHURE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
