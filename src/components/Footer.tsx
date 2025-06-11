import {  Download, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
;

const Footer = () => {
  return (
    <>
   
      <section className="bg-white mt-20 py-8">
        <div className="w-[90%] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Logo and Text */}
          <div className="flex flex-col gap-y-4 md:flex-row items-center gap-4">
            <img
              src="/img/home/logo.png"
              alt="DigiRocket Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-700 text-lg max-w-sm text-left">
              S.S.Prodigy offers different courses in Digital Marketing based on
              your Preferences, Time and Career requirements.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/brochure.pdf"
              className="flex items-center gap-2 bg-[#c9f21d] text-white px-4 py-3 rounded hover:bg-[#C9F21D] transition"
            >
              <Download className="text-lg" />
              <span className="font-semibold text-lg">Download Brochure</span>
            </a>
            <Link
              to="/contact-us"
              className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded hover:bg-gray-800 transition"
            >
              <PhoneCall className="text-lg" />
              <span className="font-semibold text-lg">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
      <footer className="w-screen px-8 py-12">
        <div className="w-[90%] mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-8 mb-12">
            {/* Location Sections */}
        
          

              <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-4">
                  India
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  9A, Tower B4, SPAZE ITECH
                  <br />
                  PARK, Sector 49, Gurugram
                </p>
              </div>
         

            {/* Useful Links */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-4">
                  Useful Links
                </h3>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li>
                    <Link
                      to="/about-us"
                      className="hover:text-gray-900 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      FAQS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Term & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Careers
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* Additional Links */}
              <div>
                <ul className="space-y-3 text-gray-600 text-lg mt-10">
                  <li>
                    <Link
                      to="/contact-us"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Help Desk
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info and Social */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-8 mb-6 lg:mb-0">
              <a
                href="mailto:info@ssprodigy.io"
                className="text-gray-900 font-medium text-lg hover:text-gray-700 transition-colors"
              >
                info@ssprodigy.io
              </a>
              {/* <a
                href="tel:+18156886366"
                className="text-gray-900 font-medium text-lg hover:text-gray-700 transition-colors"
              >
                +1 815 688 6366
              </a> */}
            </div>
{/* 
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div> */}
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Copyright © 2025 S.S. Prodigy . All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
