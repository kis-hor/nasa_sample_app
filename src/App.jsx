import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Saturn from './pages/Saturn';
import Venus from './pages/Venus';
import Neptune from './pages/Neptune';
import Uranus from './pages/Uranus';
import Jupiter from './pages/Jupiter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/jupiter" element={<Jupiter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
