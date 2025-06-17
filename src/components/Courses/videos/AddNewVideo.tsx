import React, { useState } from "react";

const AddVideoForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    url: initialData?.url || "",
    resources: initialData?.resources || [],
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

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newResources = [...formData.resources];

    files.forEach((file) => {
      // Check if file is PDF
      if (file.type === "application/pdf") {
        newResources.push({
          id: Date.now() + Math.random(),
          name: file.name,
          file: file,
          size: (file.size / 1024 / 1024).toFixed(2), // Size in MB
        });
      }
    });

    setFormData((prev) => ({ ...prev, resources: newResources }));

    // Clear the file input
    e.target.value = "";
  };

  const removeResource = (resourceId) => {
    const updatedResources = formData.resources.filter(
      (resource) => resource.id !== resourceId
    );
    setFormData((prev) => ({ ...prev, resources: updatedResources }));
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Video title is required";
    if (!formData.url.trim()) {
      newErrors.url = "Video URL is required";
    } else if (!isValidUrl(formData.url)) {
      newErrors.url = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const submitData = {
        ...formData,
        resources: formData.resources.map((resource) => ({
          id: resource.id,
          name: resource.name,
          file: resource.file,
          size: resource.size,
        })),
      };

      onSubmit?.(submitData);
      console.log("Video Data:", submitData);

      // Reset form after successful submission
      setFormData({
        title: "",
        url: "",
        resources: [],
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Add New Video
          </h2>

          <div className="space-y-6">
            {/* Video Title */}
            <div>
              <label className="block text-gray-800 font-bold mb-2 text-lg">
                Video Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="Enter video title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Video URL */}
            <div>
              <label className="block text-gray-800 font-bold mb-2 text-lg">
                Video URL *
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none text-gray-800"
                placeholder="https://example.com/video or https://youtube.com/watch?v=..."
              />
              {errors.url && (
                <p className="text-red-500 text-sm mt-1">{errors.url}</p>
              )}
              <p className="text-gray-600 text-sm mt-1">
                Supported: YouTube, Vimeo, direct video links, or any valid URL
              </p>
            </div>

            {/* Resources Section */}
            <div>
              <label className="block text-gray-800 font-bold mb-2 text-lg">
                Video Resources (PDF Files)
              </label>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-lime-400 transition-colors">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-600 font-medium">
                    Drag & drop PDF files here, or click to browse
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Multiple PDF files supported • Max 10MB per file
                  </p>
                </div>

                <input
                  type="file"
                  multiple
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resourceUpload"
                />
                <label
                  htmlFor="resourceUpload"
                  className="inline-block bg-lime-400 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors cursor-pointer"
                >
                  Choose PDF Files
                </label>
              </div>

              {/* Uploaded Resources List */}
              {formData.resources.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-800">
                    Uploaded Resources ({formData.resources.length})
                  </h4>
                  {formData.resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {resource.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {resource.size} MB • PDF
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeResource(resource.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Remove file"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-lime-400 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-lime-500 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Add New Video
              </button>
            </div>

            {/* Additional Actions */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ title: "", url: "", resources: [] });
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

          {/* Video Preview */}
          {(formData.title ||
            formData.url ||
            formData.resources.length > 0) && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Video Preview
              </h3>
              <div className="space-y-2">
                {formData.title && (
                  <div>
                    <span className="font-medium text-gray-700">Title:</span>
                    <span className="ml-2 text-gray-800">{formData.title}</span>
                  </div>
                )}
                {formData.url && (
                  <div>
                    <span className="font-medium text-gray-700">URL:</span>
                    <span className="ml-2 text-blue-600 break-all">
                      {formData.url}
                    </span>
                  </div>
                )}
                {formData.resources.length > 0 && (
                  <div>
                    <span className="font-medium text-gray-700">
                      Resources:
                    </span>
                    <span className="ml-2 text-gray-800">
                      {formData.resources.length} PDF file
                      {formData.resources.length !== 1 ? "s" : ""} attached
                    </span>
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

export default AddVideoForm;
