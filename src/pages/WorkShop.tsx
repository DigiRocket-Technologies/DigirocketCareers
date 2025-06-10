import React, { useState } from "react";
import { Calendar, Clock, MapPin,  } from "lucide-react";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import Footer from "../components/Footer";
import { loadStripe } from "@stripe/stripe-js";

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

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitted(true);

      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/workshop/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data)

      if (!data?.success) throw new Error(data?.message);

      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId, // Extract session ID from the response URL
        });

        if (error) {
          console.error("Error during checkout:", error.message);
        }
      }
    } catch (err) {
      setIsSubmitted(false);
      console.error("Error submitting form:", err);
    }
  };

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
                <span>June 11, 2025</span>
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
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
                    State Management
                  </h3>
                  <p className="text-gray-600">
                    Learn effective patterns for managing application state.
                  </p>
                </div>
                <div className="border-l-4 border-[#c9f21d] pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    API Integration
                  </h3>
                  <p className="text-gray-600">
                    Connect your frontend to APIs and handle data efficiently.
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
                    onClick={handleSubmit}
                    className="w-full bg-[#c9f21d] hover:bg-[#c9f21d] text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
                  >
                   {!isSubmitted?"Register for Workshop":"Loading"}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Workshop;
