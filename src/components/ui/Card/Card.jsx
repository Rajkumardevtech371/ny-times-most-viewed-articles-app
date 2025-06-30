const Card = ({ children, className = "", testId = "card", ...props }) => {
  return (
    <div
      data-testid={testId}
      className={`bg-white rounded-md shadow-sm border border-gray-200 p-4 sm:p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
