const BannerSection = () => {
  
  return (
    <div className="relative slanted  w-screen overflow-hidden">
      {/* Main hero container */}
      <div className=" w-[70%] mx-auto  relative">
        {/* Content wrapper */}
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          {/* Left column - Text content */}
          <div className="md:w-1/2 z-10 pt-8">
            <div className="text-[#C9F21D] font-medium mb-4">40+ Centers</div>
            
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Asia's Leading Brand<br />
              In Digital Career<br />
              Training
            </h1>
            
            <p className="text-xl mb-10 ">
              Advance your career In Data Science and Digital Marketing<br />
              with Most trusted brand in Digital Education.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex  gap-4 mb-16">
              <a 
                href="#courses" 
                className="flex text-xl items-center bg-[#C9F21D] hover:bg-[#C9F21D] text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5 3-1-1.73-3.2-1.87V7h-1.8z" />
                </svg>
                View Courses
              </a>
              
              <a 
                href="#demo" 
                className="flex items-center bg-[#C9F21D] hover:bg-[#C9F21D] text-xl text-white px-6 py-3 font-medium rounded-md transition duration-300"
              >
                Book Free Demo
                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            
          </div>
          
          {/* Right column - Image */}
          <div className="md:w-1/2 relative">
            
            {/* Student image */}
            <div className="relative z-0 h-full flex items-end justify-center mt-8 md:mt-0">
              <img 
                src="/img/home/banner-girl.png" 
                alt="Student working on laptop"
                className="object-contain max-h-96 md:max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal bottom border */}
    </div>
  );
}

export default BannerSection
