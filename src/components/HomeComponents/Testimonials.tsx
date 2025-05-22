import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Star, } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Suyash Chitre",
      image: "/api/placeholder/80/80",
      text: "My personal experience with DigiRocket was good, especially when it comes to PPC the trainer here have the depth of knowledge over the subject line.",
      rating: 5,
    },
    {
      id: 2,
      name: "Harsh Rawat",
      image: "/api/placeholder/80/80",
      text: "Best Digital Marketing Career Academy among all! I suggest all my friends about DigiRocket. They provide depth course module both technically and strategically. Happy to be a part of DigiRocket.",
      rating: 5,
    },
    {
      id: 3,
      name: "Kimz Hname",
      image: "/api/placeholder/80/80",
      text: "If you are looking for an institute which helps you learn digital marketing, then you must consider DigiRocket. They are the best in this field.",
      rating: 5,
    },
    {
      id: 4,
      name: "Priya Sharma",
      image: "/api/placeholder/80/80",
      text: "Great learning experience with practical approach. We were taught everything from basics with hands-on practice. The trainers are very supportive and knowledgeable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Rohit Kumar",
      image: "/api/placeholder/80/80",
      text: "Excellent training institute for digital marketing. The course content is up-to-date and the faculty is very experienced. Highly recommended for career growth.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-[#c9f21d] fill-[#c9f21d]" : "text-gray-300"
        }`}
      />
    ));
  };
  return (
    <div>
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <h2 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            What Our Trainees Have To Say
          </h2>

          {/* Description */}
          <p className="text-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our Courses have been receiving an average rating of 9.4/10 from our
            course participants. Till date, DigiRocket has trained more than
            75,000+ individuals.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {/* <div className="flex justify-end mb-8 space-x-4">
            <button className="swiper-button-prev-custom w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div> */}

        <Swiper
          modules={[Autoplay, Keyboard, Navigation]}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
        //   navigation={{
        //     prevEl: '.swiper-button-prev-custom',
        //     nextEl: '.swiper-button-next-custom',
        //   }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper !pb-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-800 min-h-[400px] rounded-2xl p-8 shadow-lg h-full flex flex-col">
                {/* Profile Image */}
                <div className="flex text-white justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-6">
                  <p className="text-white text-center leading-relaxed text-lg">
                    {testimonial.text}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <h4 className="text-gray-800 font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
