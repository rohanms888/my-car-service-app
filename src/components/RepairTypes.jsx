import React from 'react';
import { connect } from 'react-redux';
import { selectRepairs } from '../actions/bookingActions';

const RepairTypes = ({ repairTypes, selectedRepairs, selectRepairs }) => {
  const toggleRepair = (repair) => {
    const updatedRepairs = selectedRepairs.includes(repair)
      ? selectedRepairs.filter((r) => r !== repair)
      : [...selectedRepairs, repair];

    selectRepairs(updatedRepairs);
  };

  return (
    <div>
      <h2>Select Repair Types</h2>
      <ul>
        {repairTypes.map((repair) => (
          <li
            key={repair.id}
            onClick={() => toggleRepair(repair.name)}
            className={selectedRepairs.includes(repair.name) ? 'selected' : ''}
          >
            {repair.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repairTypes: state.repairTypes,
  selectedRepairs: state.booking.selectedRepairs,
});

const mapDispatchToProps = {
  selectRepairs,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepairTypes);
