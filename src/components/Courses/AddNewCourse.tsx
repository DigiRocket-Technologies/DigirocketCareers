const handleModularChange = (index, value) => {
  const newModular = [...formData.modular];
  newModular[index] = value;
  setFormData((prev) => ({ ...prev, modular: newModular }));
};

const addModular = () => {
  setFormData((prev) => ({ ...prev, modular: [...prev.modular, ""] }));
};

const removeModular = (index) => {
  if (formData.modular.length > 1) {
    const newModular = formData.modular.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, modular: newModular }));
  }
};
import React, { useState } from "react";

const CourseForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    originalPrice: initialData?.originalPrice || "",
    discountedPrice: initialData?.discountedPrice || "",
    bannerImage: initialData?.bannerImage || null,
    description: initialData?.description || "",
    instructorName: initialData?.instructorName || "",
    instructorDescription: initialData?.instructorDescription || "",
    instructorImage: initialData?.instructorImage || null,
    courseCertificate: initialData?.courseCertificate || "",
    validity: initialData?.validity || "",
    rating: initialData?.rating || "",
    liveStatus: initialData?.liveStatus || false,
    duration: initialData?.duration || "",
    faqs: initialData?.faqs || "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleModularChange = (index, value) => {
    const newModular = [...formData.modular];
    newModular[index] = value;
    setFormData((prev) => ({ ...prev, modular: newModular }));
  };

  const addModular = () => {
    setFormData((prev) => ({ ...prev, modular: [...prev.modular, ""] }));
  };

  const removeModular = (index) => {
    if (formData.modular.length > 1) {
      const newModular = formData.modular.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, modular: newModular }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Course title is required";
    if (!formData.originalPrice || formData.originalPrice <= 0)
      newErrors.originalPrice = "Valid original price is required";
    if (!formData.discountedPrice || formData.discountedPrice <= 0)
      newErrors.discountedPrice = "Valid discounted price is required";
    if (!formData.description.trim())
      newErrors.description = "Course description is required";
    if (!formData.instructorName.trim())
      newErrors.instructorName = "Instructor name is required";
    if (!formData.instructorDescription.trim())
      newErrors.instructorDescription = "Instructor description is required";
    if (!formData.courseCertificate.trim())
      newErrors.courseCertificate = "Course certificate is required";
    if (!formData.validity || formData.validity <= 0)
      newErrors.validity = "Valid validity period is required";
    if (!formData.rating || formData.rating < 0 || formData.rating > 5)
      newErrors.rating = "Rating must be between 0 and 5";
    if (!formData.duration || formData.duration <= 0)
      newErrors.duration = "Valid duration is required";
    if (!formData.faqs.trim()) newErrors.faqs = "FAQs section is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const submitData = {
        ...formData,
        originalPrice: Number(formData.originalPrice),
        discountedPrice: Number(formData.discountedPrice),
        validity: Number(formData.validity),
        rating: Number(formData.rating),
        duration: Number(formData.duration),
      };

      onSubmit?.(submitData);
      console.log("Course Data:", submitData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Add New Course
          </h2>

          <div className="space-y-6">
            {/* Course Title */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Course Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Enter course title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Original Price *
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                  placeholder="0.00"
                />
                {errors.originalPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.originalPrice}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Discounted Price *
                </label>
                <input
                  type="number"
                  name="discountedPrice"
                  value={formData.discountedPrice}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                  placeholder="0.00"
                />
                {errors.discountedPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.discountedPrice}
                  </p>
                )}
              </div>
            </div>

            {/* Banner Image */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Banner Image (JPG/PNG)
              </label>
              <input
                type="file"
                name="bannerImage"
                onChange={handleInputChange}
                accept=".jpg,.jpeg,.png"
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-lime-400 file:text-gray-800 file:font-semibold hover:file:bg-lime-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Course Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Enter detailed course description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Instructor Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Instructor Information
              </h3>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Instructor Name *
                </label>
                <input
                  type="text"
                  name="instructorName"
                  value={formData.instructorName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                  placeholder="Enter instructor name"
                />
                {errors.instructorName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instructorName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Instructor Description *
                </label>
                <textarea
                  name="instructorDescription"
                  value={formData.instructorDescription}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                  placeholder="Enter instructor biography and qualifications"
                />
                {errors.instructorDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instructorDescription}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Instructor Image (JPG/PNG)
                </label>
                <input
                  type="file"
                  name="instructorImage"
                  onChange={handleInputChange}
                  accept=".jpg,.jpeg,.png"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-lime-400 file:text-gray-800 file:font-semibold hover:file:bg-lime-500"
                />
              </div>
            </div>

            {/* Course Certificate */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Course Certificate *
              </label>
              <input
                type="text"
                name="courseCertificate"
                value={formData.courseCertificate}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Enter certificate type or details"
              />
              {errors.courseCertificate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.courseCertificate}
                </p>
              )}
            </div>

            {/* FAQs Section */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Frequently Asked Questions (FAQs) *
              </label>
              <textarea
                name="faqs"
                value={formData.faqs}
                onChange={handleInputChange}
                rows="6"
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Enter frequently asked questions and their answers. Format: Q: Question? A: Answer."
              />
              {errors.faqs && (
                <p className="text-red-500 text-sm mt-1">{errors.faqs}</p>
              )}
            </div>

            {/* Validity, Rating, Duration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Validity (days) *
                </label>
                <input
                  type="number"
                  name="validity"
                  value={formData.validity}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-black"
                  placeholder="365"
                />
                {errors.validity && (
                  <p className="text-red-400 text-sm mt-1">{errors.validity}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Rating (0-5) *
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-black"
                  placeholder="4.5"
                />
                {errors.rating && (
                  <p className="text-red-400 text-sm mt-1">{errors.rating}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Duration (hours) *
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-black"
                  placeholder="10"
                />
                {errors.duration && (
                  <p className="text-red-400 text-sm mt-1">{errors.duration}</p>
                )}
              </div>
            </div>

            {/* Live Status */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="liveStatus"
                id="liveStatus"
                checked={formData.liveStatus}
                onChange={handleInputChange}
                className="w-5 h-5 text-lime-400 bg-white border-2 border-gray-300 rounded focus:ring-lime-400 focus:ring-2"
              />
              <label htmlFor="liveStatus" className="text-white font-semibold">
                Live Course Status
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-lime-400 text-black font-bold py-4 px-6 rounded-lg hover:bg-lime-500 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Create Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
