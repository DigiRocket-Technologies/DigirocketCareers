import React, { useState, useEffect } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  BookOpen,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const courses = [
    { value: "llm", label: "Large Language Models (LLMs)" },
    { value: "generative-ai", label: "Generative AI" },
    { value: "agentic-ai", label: "Agentic AI" },
    { value: "predictive-analytics", label: "Predictive Analytics" },
    { value: "ai-fundamentals", label: "AI Fundamentals" },
    { value: "machine-learning", label: "Machine Learning" },
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowPopup(true), 100);
    } else {
      setShowPopup(false);
    }
  }, [isOpen]);

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
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
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

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleCourseSelect = (courseValue: string) => {
    setFormData((prev) => ({
      ...prev,
      course: courseValue,
    }));
    setIsDropdownOpen(false);
    if (errors.course) {
      setErrors((prev) => ({
        ...prev,
        course: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/contact/bookdemo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!data?.success) throw new Error(data?.message);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", course: "" });
    } catch (error) {
      setIsSubmitting(false)
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      onClose();
      setFormData({ name: "", email: "", phone: "", course: "" });
      setErrors({});
      setIsSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  const selectedCourse = courses.find(
    (course) => course.value === formData.course
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-white opacity-60 transition-opacity duration-500 ${
          showPopup ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 pointer-events-auto  transform transition-all duration-700 ease-out ${
            showPopup
              ? "translate-x-0 translate-y-0 scale-100 opacity-100"
              : "translate-x-80 translate-y-80 scale-75 opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
          >
            <X className="w-5 h-5 text-gray-600 hover:text-red-600" />
          </button>

          {/* Success State */}
          {isSubmitted && (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-[#c9f21d] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Enrollment Successful!
              </h2>
              <p className="text-gray-600 text-lg">
                Thank you for choosing SS Prodigy! We'll contact you soon with
                course details.
              </p>
            </div>
          )}

          {/* Form State */}
          {!isSubmitted && (
            <>
              {/* Form */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#c9f21d] ${
                          errors.name
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-[#c9f21d]"
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#c9f21d] ${
                          errors.email
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-[#c9f21d]"
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#c9f21d] ${
                          errors.phone
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-[#c9f21d]"
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Course Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Course
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl text-left transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#c9f21d] ${
                          errors.course
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-[#c9f21d]"
                        }`}
                      >
                        {selectedCourse
                          ? selectedCourse.label
                          : "Choose a course"}
                      </button>
                      <ChevronDown
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto">
                          {courses.map((course) => (
                            <button
                              key={course.value}
                              type="button"
                              onClick={() => handleCourseSelect(course.value)}
                              className="w-full px-4 py-3 text-left hover:bg-lime-50 hover:text-lime-700 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                            >
                              {course.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.course && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.course}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c9f21d] ${
                      isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#c9f21d] to-[#c9f21d] hover:from-[#c9f21d] hover:to-[#c9f21d] text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3"></div>
                        Enrolling...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Enroll Now
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
