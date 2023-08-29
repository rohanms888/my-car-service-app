import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarSelection from './components/CarSelection';
import RepairTypes from './components/RepairTypes';
import Calendar from './components/Calendar';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/CarSelection">CarSelection</Link>
            </li>
            <li>
              <Link to="/repair">Repair Types</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/confirmation">Confirmation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/CarSelection" element={<CarSelection />} />
          <Route path="/repair" element={<RepairTypes />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// Define a component for the root URL (you can replace this with your desired content)
function Home() {
  return (
    <div>
      <h2>Welcome To The Car Service</h2>
      <div className="car-selection">
        <img
          src="/image-1.png" // Replace with the path to your placeholder image
          alt="Car"
          className="car-image"
        />
      <textarea
          placeholder="Write about your car issue."
          className="issue-description"
        />
      </div>
    </div>
  );
}





export default App;
