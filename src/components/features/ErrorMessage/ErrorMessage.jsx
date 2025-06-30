import React from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "../../ui/Button";

const ErrorMessage = ({ message, onRetry }) => (
  <div
    className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 border border-red-200 bg-red-50 text-center"
    data-testid="error-message"
  >
    <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-4" />

    <h3 className="text-lg sm:text-xl font-serif font-bold text-black mb-2">
      Unable to Load Articles
    </h3>

    <p className="text-gray-700 mb-6 max-w-md text-sm sm:text-base font-serif">
      {message}
    </p>

    <Button
      onClick={onRetry}
      className="w-full sm:w-auto"
      data-testid="retry-btn"
    >
      Try Again
    </Button>
  </div>
);

export default ErrorMessage;
