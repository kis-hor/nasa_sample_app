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
import Earth from './pages/Earth';

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
        <Route path="/Earth" element={<Earth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
