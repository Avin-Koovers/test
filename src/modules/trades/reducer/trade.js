import { Map, List, OrderedMap, removeIn } from 'immutable';

const initialState = Map({
  tradeHistory: List(),

});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MARKET_TRADE':
      state = state.set('tradeHistory', OrderedMap());
      action.payload.trade.forEach(t => {
        state = state.setIn(['tradeHistory', t[0]], t);
      });
      return state;
    case 'UPDATE_MARKET_TRADE': {
      let trade = action.payload.trade;
      state = state.deleteIn(['tradeHistory',state.getIn(['tradeHistory']).toArray()[0][0]])
      state = state.setIn(['tradeHistory', trade[0]], trade);
      return state;
    }
    default:
      return state;
  }
};
