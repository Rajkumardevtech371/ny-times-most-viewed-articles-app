import { RefreshCw } from "lucide-react";

const LoadingSpinner = () => (
  <div
    className="flex justify-center items-center px-4 py-12 sm:py-16"
    data-testid="loading-spinner"
  >
    <div className="text-center">
      <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-black mx-auto mb-3 sm:mb-4" />
      <span className="text-gray-700 font-serif text-sm sm:text-base">
        Loading articles...
      </span>
    </div>
  </div>
);

export default LoadingSpinner;
