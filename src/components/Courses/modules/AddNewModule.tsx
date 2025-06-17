import React, { useState } from "react";

const AddModuleForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    learningObjective: initialData?.learningObjective || "",
    duration: initialData?.duration || "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Module title is required";
    if (!formData.learningObjective.trim())
      newErrors.learningObjective = "Learning objective is required";
    if (!formData.duration || formData.duration <= 0)
      newErrors.duration = "Valid duration is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const submitData = {
        ...formData,
        duration: Number(formData.duration),
      };

      onSubmit?.(submitData);
      console.log("Module Data:", submitData);

      // Reset form after successful submission
      setFormData({
        title: "",
        learningObjective: "",
        duration: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Add New Module
          </h2>

          <div className="space-y-6">
            {/* Module Title */}
            <div>
              <label className="block text-gray-800 font-bold mb-2 text-lg">
                Module Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Enter module title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Learning Objective */}
            <div>
              <label className="block text-gray-800 font-bold mb-2 text-lg">
                Learning Objective *
              </label>
              <textarea
                name="learningObjective"
                value={formData.learningObjective}
                onChange={handleInputChange}
                rows="6"
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Describe what students will learn and achieve after completing this module"
              />
              {errors.learningObjective && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.learningObjective}
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-gray-800 font-bold mb-2 text-lg">
                Duration (hours) *
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                min="0.5"
                step="0.5"
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="2.5"
              />
              {errors.duration && (
                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
              )}
              <p className="text-gray-600 text-sm mt-1">
                Enter duration in hours (e.g., 2.5 for 2 hours 30 minutes)
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-lime-400 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-lime-500 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Add New Module
              </button>
            </div>

            {/* Additional Actions */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      title: "",
                      learningObjective: "",
                      duration: "",
                    });
                    setErrors({});
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear Form
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-lime-100 text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-lime-200 transition-colors border border-lime-300"
                >
                  Save & Add Another
                </button>
              </div>
            </div>
          </div>

          {/* Module Preview */}
          {(formData.title ||
            formData.learningObjective ||
            formData.duration) && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Module Preview
              </h3>
              <div className="space-y-2">
                {formData.title && (
                  <div>
                    <span className="font-medium text-gray-700">Title:</span>
                    <span className="ml-2 text-gray-800">{formData.title}</span>
                  </div>
                )}
                {formData.duration && (
                  <div>
                    <span className="font-medium text-gray-700">Duration:</span>
                    <span className="ml-2 text-gray-800">
                      {formData.duration} hours
                    </span>
                  </div>
                )}
                {formData.learningObjective && (
                  <div>
                    <span className="font-medium text-gray-700">
                      Learning Objective:
                    </span>
                    <p className="ml-2 text-gray-800 mt-1">
                      {formData.learningObjective}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddModuleForm;
