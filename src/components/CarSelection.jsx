import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../actions/carActions';
import './CarSelection.css'; // Import your CSS file


const CarSelection = ({ cars, selectCar }) => {
  const [issueDescription, setIssueDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleCarSelection = (car) => {
    selectCar(car, issueDescription, selectedImage);
  };

  useEffect(() => {
    // You can perform any necessary side effects here
  }, []);

  if (!cars || cars.length === 0) {
    return (
      <div>
        <h2>Choose Your Car</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Select a Car</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <div onClick={() => handleCarSelection(car)}>
              {car.name}
            </div>
            <div>
              <textarea
                placeholder="Describe the issue"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
              />
            </div>
            <div className="file-input">
              <label htmlFor="file-upload" className="custom-file-upload">
                <img
                  src="/image-1.jpg" // Replace with the path to your image icon
                  alt="Choose"
                  className="image-icon"
                />
                Choose Image
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
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

