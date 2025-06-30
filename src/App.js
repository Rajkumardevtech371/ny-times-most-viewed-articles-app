import { Articles } from "./components/features/Articles";
import { Header } from "./components/features/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
         <Articles/>
      </main>
    </div>
  );
};

export default App;
