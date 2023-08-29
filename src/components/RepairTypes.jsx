import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectRepairs } from '../actions/bookingActions';

const RepairTypes = ({ repairTypes, selectedRepairs, selectRepairs }) => {
  // Initialize the selected repair types as an array
  const [selectedRepairTypes, setSelectedRepairTypes] = useState([]);

  // Toggle the selected repair types
  const toggleRepair = (repairType) => {
    if (selectedRepairTypes.includes(repairType)) {
      // If the repair type is already selected, remove it
      setSelectedRepairTypes(selectedRepairTypes.filter((type) => type !== repairType));
    } else {
      // If the repair type is not selected, add it to the selectedRepairTypes array
      setSelectedRepairTypes([...selectedRepairTypes, repairType]);
    }
  };

  return (
    <div>
      <h2>Select Repair Types</h2>
      <ul>
        {repairTypes.map((repair) => (
          <li
            key={repair.id}
            onClick={() => toggleRepair(repair)}
            className={selectedRepairTypes.includes(repair) ? 'selected' : ''}
          >
            {repair.name}
            {selectedRepairTypes.includes(repair) && (
              <span className="price">Price: {repair.price}</span>
            )}
          </li>
        ))}
      </ul>
      {/* Display the total price for all selected repair types */}
      <div>
        {selectedRepairTypes.length > 0 && (
          <p>Total Price: ${selectedRepairTypes.reduce(
            (totalPrice, repairType) =>
              totalPrice + repairTypes.find((repair) => repair === repairType).price,
            0
          )}</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repairTypes: state.repairTypes.repairTypes,
  selectedRepairs: state.booking.selectedRepairs,
});

const mapDispatchToProps = {
  selectRepairs,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepairTypes);
