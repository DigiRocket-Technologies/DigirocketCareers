import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";


const DontWait = () => {
  const cards = [
    {
      id: 1,
      title: "Explosive Job Growth Across Industries",
      img: "/img/dropshipping/winning product research-100.jpg",
      description:
        "From healthcare and finance to marketing and logistics, companies across sectors are hiring AI professionals at record speed. The global AI job market is projected to grow by over 35% annually in the coming years.",
    },
    {
      id: 2,
      title: "High-Paying Career Opportunities",
      img: "/img/dropshipping/supplier sourcing and logistic-100.jpg",
      description:
        "AI roles such as Prompt Engineers, AI Specialists, and Data Scientists are among the top-paying tech jobs worldwide. Skilled professionals are commanding premium salaries—even at entry levels.",
    },
    {
      id: 3,
      title: "AI Is Becoming a Core Business Function",
      img: "/img/dropshipping/custom store and website development-100.jpg",
      description:
        "AI is no longer just for tech companies. Businesses are using AI for automation, customer insights, personalization, and more. Knowing AI makes you valuable in nearly every modern workplace.",
    },
    {
      id: 4,
      title: "The Skill Gap Is Huge—And You Can Fill It",
      img: "/img/dropshipping/brand positioning-100.jpg",
      description:
        "While demand is soaring, there’s a global shortage of AI-trained talent. That means less competition and more opportunity for those who upskill early.",
    },
  ];

  return (
    <div className="pb-10 w-screen">
      <div className="relative w-[90%]  container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          AI Skills Are in Demand—Here’s Why You Shouldn’t Wait
        </h2>
        <Swiper
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={{
            nextEl: ".dropshippingservice-next",
            prevEl: ".dropshippingservice-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 2.8,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, Keyboard, Autoplay]}
        >
          <div className="swiper-wrapper">
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div
                  key={card.id}
                  className="p-2.5"
                  style={{ minHeight: "650px" }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full">
                    <div className="relative">
                      <img
                        src={card?.img ? card.img : `/assets/img/blog/4.jpg`}
                        className="w-full rounded-t-lg object-cover"
                        alt="Featured"
                        style={{ height: "460px" }}
                      />
                      <div className="absolute top-3 left-1 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg font-bold border-2 border-white">
                        {card.id}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-black text-xl font-semibold mb-3">
                        {card.title}
                      </h4>
                      <p
                        className="text-gray-500 leading-relaxed overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="flex mt-8 gap-2.5 justify-center items-center">
          <button className="dropshippingservice-prev bg-[#C9F21D]  flex justify-center  w-[100px] hover:bg-[#C9F21D] cursor-pointer px-4 py-2  text-lg rounded-full font-medium transition-colors">
            <ChevronLeft/>
          </button>
          <button className="dropshippingservice-next bg-[#C9F21D] flex justify-center  w-[100px] hover:bg-[#C9F21D] cursor-pointer px-4 py-2  text-lg rounded-full font-medium transition-colors">
            <ChevronRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontWait;
