import { useNavigate } from "react-router-dom";


const GetBrochure = () => {
  const navigate=useNavigate()
  // const [selectedCourse, setSelectedCourse] = useState(
  //   "LLM Master Course: Learn all about LLMs",
  // );

  // const courses = [
  //   "LLM Master Course: Learn all about LLMs",
  //   "Agentic AI: Learn process Automation",
  //   "Predictive analysis using data science and ai",
  //   "Mastering Generative AI: images, content and it's application",
  // ];
  return (
    <>
      <div id="get-brochure" className="flex w-[75%] mt-20 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Form content */}
        <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
          {/* Logo */}
         
          {/* Main content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Confused? Why not let us help!
            </h2>
            <p className="text-gray-600 mb-8 text-xl">
              Get in touch with our Friendly Team. Speak to us for Batches, fee
              and curriculum.
            </p>

            {/* Form */}
            {/* <div className="mb-8">
              <label className="block text-gray-700 mb-2 text-xl">
                Select Course*
              </label>
              <div className="relative">
                <select
                  className="w-full border text-xl border-gray-300 rounded px-4 py-3 appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9F21D]"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  {courses.map((course) => (
                    <option className="text-lg" key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <button onClick={()=>navigate("/contact-us")} className="cursor-pointer w-[60%] mx-auto text-xl bg-[#C9F21D] hover:bg-[#C9F21D] text-white font-semibold py-3 px-3 rounded transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gray-100 relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9F21D] rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-90"></div>

          <div className="h-full flex items-center justify-center">
            <img
              src="/img/home/brochure-girl.png"
              alt="Student pointing at educational content"
              className="h-full object-cover"
            />
          </div>

          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C9F21D] rounded-full transform translate-x-1/3 translate-y-1/3 opacity-90"></div>
        </div>
      </div>
    </>
  );
};

export default GetBrochure;
