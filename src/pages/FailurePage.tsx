
import { XCircle, ArrowLeft,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FailurePage = () => {
    const navigate=useNavigate();
  const handleBackToHome = () => {
 
    navigate("/")
  };
 
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Failure Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-red-200 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Failure Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Failed
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            We couldn't process your payment
          </p>
          <p className="text-sm text-gray-500">
            Your payment was declined. Please check your payment details and try again, or use a different payment method.
          </p>
        </div>

        {/* Failure Details */}
        <div className="mb-8 p-6 bg-red-50 rounded-lg border border-red-100">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-red-700">
              Transaction Declined
            </span>
          </div>
          <p className="text-xs text-red-600">
            No charges were made to your account. You can try again with different payment details.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          {/* Try Again Button */}

          {/* Back to Home Button */}
          <button
            onClick={handleBackToHome}
            className="w-full py-4 px-6 text-gray-700 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border-2 border-gray-300 hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>

      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-50 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default FailurePage;