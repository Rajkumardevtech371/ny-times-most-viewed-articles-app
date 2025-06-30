const SectionTitle = ({ children, className = "" }) => (
    <h3
      className={`text-base sm:text-lg font-serif font-bold text-black mb-4 ${className}`}
    >
      {children}
    </h3>
  );
  
  export default SectionTitle;
  