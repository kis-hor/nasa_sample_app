import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Saturn from './pages/Saturn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saturn" element={<Saturn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
