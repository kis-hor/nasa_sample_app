import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Saturn from './pages/Saturn';
import Mars from './pages/mars';
import Venus from './pages/Venus';
import Neptune from './pages/Neptune';
import Uranus from './pages/Uranus';
import Jupiter from './pages/Jupiter';
import Earth from './pages/Earth';
import Mercury from './pages/mercury';
import Planets from './pages/Planets';
import Stars from './pages/Stars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/Earth" element={<Earth />} />
        <Route path="/Mercury" element={<Mercury />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/stars" element={<Stars />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
