import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import Footer from "../components/Footer";
// import { loadStripe } from "@stripe/stripe-js";
import { loadRazorpay } from "../utils/loadRazorpayScript";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
declare global {
  interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }

  interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    image?: string;
    order_id: string;
    handler: (response: RazorpayResponse) => void;
    prefill?: {
      name?: string;
      email?: string;
      contact?: string;
    };
    notes?: Record<string, any>;
    theme?: {
      color?: string;
    };
    modal?: {
      ondismiss?: () => void;
    };
  }

  interface RazorpayInstance {
    open(): void;
    on(event: string, callback: (...args: any[]) => void): void;
  }

  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

const Workshop = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    return newErrors;
  };

  // const handleSubmit = async (
  //   e: React.MouseEvent<HTMLButtonElement>
  // ): Promise<void> => {
  //   e.preventDefault();
  //   const newErrors = validateForm();

  //   if (Object.keys(newErrors).length !== 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   try {
  //     setIsSubmitted(true);

  //     const response = await fetch(
  //       `${
  //         import.meta.env.VITE_BACKEND_URL
  //       }/api/v1/workshop/create-checkout-session`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     const data = await response.json();
  //     console.log(data);

  //     if (!data?.success) throw new Error(data?.message);

  //     setIsSubmitted(false);
  //     setFormData({ name: "", email: "", phone: "" });

  //     const stripe = await stripePromise;
  //     if (stripe) {
  //       const { error } = await stripe.redirectToCheckout({
  //         sessionId: data.sessionId, // Extract session ID from the response URL
  //       });

  //       if (error) {
  //         console.error("Error during checkout:", error.message);
  //       }
  //     }
  //   } catch (err) {
  //     setIsSubmitted(false);
  //     console.error("Error submitting form:", err);
  //   }
  // };

  const handlePayment = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    try {
       setIsSubmitted(true);

      const res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/workshop/create-razorpay-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const order = await res.json();


      if (!order?.success) throw new Error(order?.message);

      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Data Science Workshop",
        description: "Exclusive workshop",
        order_id: order.id,
        handler: function () {
          window.location.href = order.success_url;
        },
        prefill: {
          name: order.name,
          email: order.email,
          contact: order.phone,
        },
        notes: {
          email: order.email,
          name: order.name,
          phone: order.phone,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: () => {
            window.location.href = order.cancel_url;
          },
        },
      };

      await loadRazorpay();

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setIsSubmitted(false);
      console.error("Error submitting form:", err);
    }
  };

  interface ReasonCardProps {
    title: string;
    description: string;
    icon: string;
  }

  const ReasonCard: React.FC<ReasonCardProps> = ({
    title,
    description,
    icon,
  }) => {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
        <div className="flex items-center mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4"
            style={{ backgroundColor: "#c9f21d" }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
  };

  const reasons = [
    {
      title: "Learn New Skills",
      description:
        "Gain hands-on experience with cutting-edge technologies and industry best practices that will boost your career.",
      icon: "🎓",
    },
    {
      title: "Expert Guidance",
      description:
        "Learn directly from industry professionals with years of real-world experience and proven track records.",
      icon: "👨‍🏫",
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with like-minded professionals, build lasting relationships, and expand your professional network.",
      icon: "🤝",
    },
    {
      title: "Practical Projects",
      description:
        "Work on real-world projects that you can add to your portfolio and showcase to potential employers.",
      icon: "💼",
    },
    {
      title: "Career Growth",
      description:
        "Accelerate your career progression with new competencies and certifications that employers value.",
      icon: "📈",
    },
    {
      title: "Interactive Learning",
      description:
        "Engage in collaborative exercises, group discussions, and hands-on activities for better retention.",
      icon: "🎯",
    },
  ];

  return (
    <>
      <HomeNavbar />
      <div className="min-h-screen w-screen bg-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Generative AI Workshop
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8">
              From Zero To Hero
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>June 17, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>6:00 PM to 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div
            id="join-workshop"
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Workshop Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#c9f21d] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Fundamentals
                  </h3>
                  <p className="text-gray-600">
                    Master the core concepts and architecture
                  </p>
                </div>
                <div className="border-l-4 border-[#c9f21d] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Prompt Engineering
                  </h3>
                  <p className="text-gray-600">
                    Craft precise instructions for AI systems
                  </p>
                </div>
                <div className="border-l-4 border-[#c9f21d] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Study Acceleration
                  </h3>
                  <p className="text-gray-600">
                    Integrate AI into your learning workflow
                  </p>
                </div>
                <div className="border-l-4 border-[#c9f21d] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Academic Ethics
                  </h3>
                  <p className="text-gray-600">
                    Use AI responsibly and maintain integrity
                  </p>
                </div>
                <div className="border-l-4 border-[#c9f21d] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tips and Tricks
                  </h3>
                  <p className="text-gray-600">
                    Advanced Techniques and power-user secrets .
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Register Now
              </h2>
              <p className="text-gray-600 mb-8">
                Secure your spot in this exclusive workshop
              </p>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#c9f21d] focus:border-[#c9f21d] outline-none transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#c9f21d] focus:border-[#c9f21d] outline-none transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#c9f21d] focus:border-[#c9f21d] outline-none transition-colors ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    disabled={isSubmitted}
                    onClick={handlePayment}
                    className="w-full bg-[#c9f21d] hover:bg-[#c9f21d] text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
                  >
                    {!isSubmitted ? "Register for Workshop" : "Loading"}
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  By registering, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Why Join Our Workshop?
                </h1>
                <div
                  className="w-24 h-1 mx-auto mb-6"
                  style={{ backgroundColor: "#c9f21d" }}
                ></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the compelling reasons why thousands of professionals
                  choose our workshops to advance their careers and skills.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <ReasonCard
                    key={index}
                    title={reason.title}
                    description={reason.description}
                    icon={reason.icon}
                  />
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <a href="#join-workshop">
                  <button
                    className="px-8 py-4 text-lg font-semibold text-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    style={{ backgroundColor: "#c9f21d" }}
                  >
                    Join the Workshop Today
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Workshop;
