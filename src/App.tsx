import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen py-2 w-100 bg-gray-800 text-white">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
