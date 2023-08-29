
const initialState = {
    repairTypes: [
      { id: 1, name: 'Engine Repair', price: 500 },
      { id: 2, name: 'Brake Repair', price: 250 },
      { id: 3, name: 'Transmission Repair', price: 700 },
      
    ],
  };
  
  
  const repairTypesReducer = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };
  
  export default repairTypesReducer;
  
