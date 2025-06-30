const Layout = ({ children }) => (
    <div className="min-h-screen bg-white font-serif">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {children}
      </main>
    </div>
  );
  
  export default Layout;
  