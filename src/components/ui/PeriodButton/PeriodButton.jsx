const PeriodButton = ({ active, disabled, label, onClick, testId }) => {
    const base =
      "px-4 sm:px-6 py-2.5 sm:py-3 font-semibold transition-colors text-sm text-center flex-1 sm:flex-none";
    const activeStyle = active ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100";
    const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";
  
    return (
      <button
        className={`${base} ${activeStyle} ${disabledStyle}`}
        onClick={onClick}
        disabled={disabled}
        data-testid={testId}
      >
        {label}
      </button>
    );
  };
  
  export default PeriodButton;
  