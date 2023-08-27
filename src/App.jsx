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
          <Route path="/" exact component={CarSelection} />
          <Route path="/repair" component={RepairTypes} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/confirmation" component={Confirmation} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
