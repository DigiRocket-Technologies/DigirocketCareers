import { Crown,  } from 'lucide-react';

const Founders = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Shubhranshu Srivastava",
      position: "Founder, Director & CEO",
      image: "/img/about/shubh sir 2.png",
     
    },
    {
      id: 2,
      name: "Sunny Kumar",
      position: "Co-Founder, Director & COO",
      image: "/img/about/sunny sir photoshoot.png",
     
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-lime-50 to-lime-100 w-screen py-20 px-4 relative overflow-hidden">
  

      <div className="w-[90%] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9f21d] rounded-full shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300">
            <Crown className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Meet the Brains Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] bg-clip-text text-transparent text-5xl md:text-6xl">
              SS Prodigy
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            They bring a{' '}
            <span className="font-semibold text-[#c9f21d]">bold strategic vision</span>{' '}
            rooted in future-ready thinking, while ensuring{' '}
            <span className="font-semibold text-[#c9f21d]">smooth operations</span>{' '}
            and learner success, making sure every student gets the tools and support to succeed.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="group relative">
              {/* Main Card Container */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-all duration-500 hover:shadow-3xl border border-lime-100 h-[650px] w-[400px]">
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-120 bg-gradient-to-br from-lime-100 to-lime-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full  transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Gradient overlay */}
                 
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-[#c9f21d] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    {index === 0 ? 'CEO' : 'COO'}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#c9f21d] text-lg font-semibold mb-3">
                      {member.position}
                    </p>
                    
                  </div>
                </div>

              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#c9f21d] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#c9f21d] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Founders;