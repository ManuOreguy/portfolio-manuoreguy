import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-100 bg-gray-800 text-white">
      <Header />
      <Home />
    </div>
  );
}

export default App;
