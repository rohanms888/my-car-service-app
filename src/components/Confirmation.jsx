import React from 'react';
import { connect } from 'react-redux';

const Confirmation = ({ selectedCar, selectedRepairs, selectedDate }) => {
  // Use a ternary operator to conditionally render the confirmation
  return (
    <div>
      <h2>Confirmation</h2>
      {selectedCar && selectedCar.name ? (
        <>
          <p>Car: {selectedCar.name}</p>
          <p>Repairs: {selectedRepairs.join(', ')}</p>
          <p>Date: {selectedDate}</p>
          <button>Confirm Booking</button>
        </>
      ) : (
        <p>Great! 
          The car is Booked for service.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCar: state.selectedCar,
  selectedRepairs: state.selectedRepairs,
  selectedDate: state.selectedDate,
});

export default connect(mapStateToProps)(Confirmation);
