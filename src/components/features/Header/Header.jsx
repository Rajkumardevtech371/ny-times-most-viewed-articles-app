const Header = () => (
    <header className="border-b-4 border-black bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-3xl sm:text-4xl font-serif font-bold text-black">
            The New York Times
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-xs sm:text-sm">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
  
  export default Header;
  