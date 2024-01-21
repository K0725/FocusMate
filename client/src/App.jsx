import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Create from './pages/CreateGroup';


// Contain all the routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App;