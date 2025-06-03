import skills from "../../assets/jsonData/skills.json"

type SkillsProps = {
  start: number;
  end: number;
};

const Skills = ({start,end}:SkillsProps) => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Key <span className="">Skills You Will Learn</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.slice(start,end).map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-2 border-transparent hover:border-[#C9F21D]"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#C9F21D]/10 rounded-full flex items-center justify-center group-hover:bg-[#C9F21D]/20 transition-colors duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center group-hover:text-[#C9F21D] transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
