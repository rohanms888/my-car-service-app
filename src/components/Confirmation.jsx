import React from 'react';
import { connect } from 'react-redux';

const Confirmation = ({ selectedCar, selectedRepairs, selectedDate }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Car: {selectedCar.name}</p>
      <p>Repairs: {selectedRepairs.join(', ')}</p>
      <p>Date: {selectedDate}</p>
      <button>Confirm Booking</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCar: state.selectedCar,
  selectedRepairs: state.selectedRepairs,
  selectedDate: state.selectedDate,
});

export default connect(mapStateToProps)(Confirmation);
