import { Map, List, OrderedMap, removeIn } from 'immutable';

const initialState = Map({
  orderbook:{"asks": List(),"bids": List()},

});

const reverseBigNumberComparator = (a, b) => {
  if (a[0]>(b[0])) {
    return -1;
  } else if (a[0]==(b[0])) {
    return 0;
  } else {
    return 1;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ORDERBOOK':
      state = state.set('orderbook', OrderedMap());
      state = state.setIn(['orderbook', "asks"], List(action.payload.orderbook.asks));
      state = state.setIn(['orderbook', "bids"], List(action.payload.orderbook.bids));
      return state;
    case 'UPDATE_ORDERBOOK': {
      const side = action.payload.orderbook[2]>0 ? 'bids' : 'asks';
      const price = action.payload.orderbook[0]
      const amount = action.payload.orderbook[2]
      const count = action.payload.orderbook[1]
      const index = state.getIn(['orderbook', side]).findIndex(priceLevel => priceLevel[0]===price);
      
      if (index >= 0) {
        
        if (count===0 &&(amount===1||amount===-1)) {
          state = state.deleteIn(['orderbook', side, index]);
        }else {
          state = state.updateIn(['orderbook', side, index], priceLevel => [priceLevel[0],count, amount]);
        }
      } else if (count!==0 && amount!==1 && amount !==-1) {
        state = state.updateIn(['orderbook', side], list => list.push([price,count, amount]));
      }
      
      state = state.setIn(['orderbook', side], state.getIn(['orderbook', side]).sort(reverseBigNumberComparator));
      return state;
    }
    
    default:
      return state;
  }
};
