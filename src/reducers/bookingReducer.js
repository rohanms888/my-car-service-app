const initialState = {
    selectedRepairs: [],
    selectedDate: null,
    confirmation: false,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_REPAIRS':
        return { ...state, selectedRepairs: action.payload };
      case 'SELECT_DATE':
        return { ...state, selectedDate: action.payload };
      case 'CONFIRM_BOOKING':
        return { ...state, confirmation: true };
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  