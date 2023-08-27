import React from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../actions/carActions';

const CarSelection = ({ cars, selectCar }) => {
  return (
    <div>
      <h2>Select a Car</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id} onClick={() => selectCar(car)}>
            {car.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cars: state.cars,
});

export default connect(mapStateToProps, { selectCar })(CarSelection);
