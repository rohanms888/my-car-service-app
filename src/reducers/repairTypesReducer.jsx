
const initialState = {
    repairTypes: [
      { id: 1, name: 'Engine Repair', price: 5000 },
      { id: 2, name: 'Brake Repair', price: 2500 },
      { id: 3, name: 'Transmission Repair', price: 7000 },
      
    ],
  };
  
  
  const repairTypesReducer = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };
  
  export default repairTypesReducer;
  