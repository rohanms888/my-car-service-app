import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarSelection from './components/CarSelection';
import RepairTypes from './components/RepairTypes';
import Calendar from './components/Calendar';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/carSelection" element={CarSelection} />
          <Route path="/repair" element={RepairTypes} />
          <Route path="/calendar" element={Calendar} />
          <Route path="/confirmation" element={Confirmation} />

          {/* Add a catch-all route for the root URL */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// Define a component for the root URL (you can replace this with your desired content)
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default App;
