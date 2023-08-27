const initialState = null;

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CAR':
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
