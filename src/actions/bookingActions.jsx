export const selectRepairs = (repairs) => {
    return {
      type: 'SELECT_REPAIRS',
      payload: repairs,
    };
  };
  
  export const selectDate = (date) => {
    return {
      type: 'SELECT_DATE',
      payload: date,
    };
  };
  
  export const confirmBooking = () => {
    return {
      type: 'CONFIRM_BOOKING',
    };
  };
  