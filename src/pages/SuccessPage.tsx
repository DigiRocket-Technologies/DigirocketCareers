import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-lime-100 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle
                className="w-12 h-12 text-lime-500"
                style={{ color: "#c9f21d" }}
              />
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-lime-200 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Success Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-sm text-gray-500">
            Your payment has been processed successfully. You should receive a
            confirmation email shortly.
          </p>
        </div>

        {/* Success Details */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center justify-center mb-4">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: "#c9f21d" }}
            ></div>
            <span className="text-sm font-medium text-gray-700">
              Transaction Complete
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Your order is being processed and you'll receive updates via email.
          </p>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={handleBackToHome}
          className="w-full py-4 px-6 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
          style={{
            backgroundColor: "#c9f21d",
            borderColor: "#c9f21d",
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: "#c9f21d" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-5"
          style={{ backgroundColor: "#c9f21d" }}
        ></div>
      </div>
    </div>
  );
};

export default SuccessPage;
