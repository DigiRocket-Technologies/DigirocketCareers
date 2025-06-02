
const Founders = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Shubhranshu Srivastava",
      position: "Founder, Director & CEO",
      image: "/img/about/shubh sir 2.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Sunny Kumar",
      position: "Co-Founder, Director & COO",
      image: "/img/about/sunny sir photoshoot.png", // Replace with actual image path
    }
  ];

  return (
    <section className="bg-white w-screen py-16 px-4">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              {/* Main container */}
              <div className="relative overflow-hidden">
                {/* Background image */}
                <div className="relative w-[400px] bg-gray-100 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-[400px] rounded-md h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Content overlay */}
                <div  className={`w-[350px] h-[220px] absolute  left-0 bottom-4  p-6 lg:p-8`}>
                  <div className="bg-black/80 w-full h-full backdrop-blur-sm p-6 rounded-lg  border border-gray-700/50">
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-[#C9F21D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;