import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Spaceship from './Portfolio/Spaceship';
import UnderConstruction from './UnderConstruction';
import About from './About';
import PortfolioList from './Portfolio/PortfolioList';
import KLS from './Portfolio/KLS';
import SOS_Lamp from './Portfolio/SOS_Lamp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Portfolio' element={<PortfolioList/>} />
            <Route path='/Spaceship' element={<Spaceship/>}></Route>
            <Route path='/KLS' element={<KLS/>}></Route>
            <Route path='/ShapeChangeLamp' element={<SOS_Lamp/>}></Route>
            <Route path='/pending-construction' element={<UnderConstruction/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
