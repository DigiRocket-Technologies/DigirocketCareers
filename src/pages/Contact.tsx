import React, { useState } from "react";
import { Mail, Phone, User, Send, CheckCircle } from "lucide-react";
import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import Footer from "../components/Footer";

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

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    //await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      const response = await fetch(
        `${import.meta.env.VITE_DOMAIN}api/v1/contact/contact-us`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        console.log("error");
        setIsSubmitted(true);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      const result = await response.json();
      console.log("Form submission successful:", result);
      return result;
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:");
      throw error;
    }

    // setIsSubmitted(true);

    //Reset form after success message
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-lime-50 to-lime-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform animate-pulse">
          <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HomeNavbar />
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Panel - Decorative */}
            <div className="bg-gradient-to-br from-lime-400 to-lime-500 p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Let's Connect
                </h1>
                <p className="text-xl text-lime-100 mb-8 leading-relaxed">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-lime-100">
                    <Mail className="w-6 h-6 mr-4" />
                    <span className="text-lg">info@digirocket.io</span>
                  </div>
                  <div className="flex items-center text-lime-100">
                    <Phone className="w-6 h-6 mr-4" />
                    <span className="text-lg">+1 815 688 6366</span>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-200 ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus:border-lime-400"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 animate-pulse">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-200 ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus:border-lime-400"
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 animate-pulse">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-700 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-200 ${
                        errors.phone
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus:border-lime-400"
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600 animate-pulse">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-200 ${
                    isSubmitting
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-lime-400 hover:bg-lime-500 text-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
