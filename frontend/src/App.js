import{BrowserRouter , Routes, Route} from 'react-router-dom';

//pages and components
import Home from './pages/Home';
import QR from './components/QR';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/qr" 
              element={<QR />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;