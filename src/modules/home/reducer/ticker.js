import { Map, List} from 'immutable';

const initialState = Map({
  ticker: List(),

});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TICKER': {
      let ticker = action.payload.ticker;
      state = state.setIn(['ticker'], ticker);
      return state;
    }
    default:
      return state;
  }
};