import { Map } from 'immutable';

const initialState = Map({
  socket:true
});

export default (state = initialState, action) => {
    switch (action.type) {
    
      case 'CHANGE_SOCKET_STATE':
        state = state.setIn(['socket'], action.payload);
        return state;
      default:
        return state;
    }
  };
  