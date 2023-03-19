import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import UnderConstruction from './UnderConstruction';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pending-construction' element={<UnderConstruction/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
