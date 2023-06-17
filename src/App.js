import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Spaceship from './Portfolio/Spaceship';
import UnderConstruction from './UnderConstruction';
import About from './About';
import PortfolioList from './Portfolio/PortfolioList';
import KLS from './Portfolio/KLS';
import SOSLamp from './Portfolio/SOS_Lamp';
import Bachelor from './Portfolio/Bachelor';
import Calendar from './Portfolio/Calendar';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbarContainer = document.querySelector('.navbar');
    const navbarHeight = navbarContainer.offsetHeight;
    setNavbarHeight(navbarHeight);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='backgroundContainer'></div>
        <div className="content" style={{ marginTop: `${navbarHeight}px` }}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Portfolio' element={<PortfolioList/>} />
            <Route path='/Spaceship' element={<Spaceship/>}></Route>
            <Route path='/KLS' element={<KLS/>}></Route>
            <Route path='/ShapeChangeLamp' element={<SOSLamp/>}></Route>
            <Route path='/BachelorProject' element={<Bachelor/>}></Route>
            <Route path='/Calendar' element={<Calendar/>}></Route>
            <Route path='/pending-construction' element={<UnderConstruction/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
