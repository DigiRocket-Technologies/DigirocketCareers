import { useState } from 'react';
import { Menu, X, Search, Mail } from 'lucide-react';
const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black">
      {/* Top contact bar */}
     

      {/* Main navbar */}
      <div className="px-4 py-6 border-b-[white] border-b-[1px] shadow-md">
        <div className="w-[90%] mx-auto flex justify-between  items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/img/home/logo.png" className='w-[200px]' alt="" />
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-lg space-x-8">
            <a href="#" className="hover:text-[#C9F21D]  transition-colors font-medium">
              HOME
            </a>
            <a href="#" className="hover:text-[#C9F21D]  transition-colors font-medium">
              ABOUT US
            </a>
            <a href="#" className="hover:text-[#C9F21D]  transition-colors font-medium">
              OUR PROGRAMS
            </a>
            <a href="#" className="hover:text-[#C9F21D]  transition-colors font-medium">
              BLOGS
            </a>
            <a href="#" className="hover:text-[#C9F21D]  transition-colors font-medium">
              CENTERS
            </a>
            <a href="#" className="hover:text-[#C9F21D]  transition-colors font-medium">
              CONTACT US
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Search size={20} />
            </button> */}
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
              <a href="#" className="hover:text-[#C9F21D] transition-colors font-medium py-2">
                HOME
              </a>
              <a href="#" className="hover:text-[#C9F21D] transition-colors font-medium py-2">
                ABOUT US
              </a>
              <a href="#" className="hover:text-[#C9F21D] transition-colors font-medium py-2">
                OUR PROGRAMS
              </a>
              <a href="#" className="hover:text-[#C9F21D] transition-colors font-medium py-2">
                BLOGS
              </a>
              <a href="#" className="hover:text-[#C9F21D] transition-colors font-medium py-2">
                CENTERS
              </a>
              <a href="#" className="hover:text-[#C9F21D] transition-colors font-medium py-2">
                CONTACT US
              </a>
              
              {/* Mobile contact info */}
              <div className="md:hidden flex items-center space-x-2 py-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>contact@DigiRocket.org</span>
              </div>
              
              {/* Mobile buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <button className="flex items-center justify-center space-x-2 p-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <Search size={20} />
                  <span>Search</span>
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-medium transition-colors">
                  REQUEST A BROCHURE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default HomeNavbar
