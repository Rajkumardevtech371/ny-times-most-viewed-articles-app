const IconText = ({ icon: Icon, children }) => (
    <div className="flex items-center text-sm text-gray-600">
      <Icon className="w-4 h-4 mr-1" />
      <span>{children}</span>
    </div>
  );
  
  export default IconText;
  