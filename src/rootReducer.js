import { combineReducers } from 'redux';
import trade from './modules/trades/reducer/trade'
import orderbook from './modules/orderbook/reducer/orderbook'
import ticker from './modules/home/reducer/ticker'
const rootReducer = combineReducers({
    trade,
    orderbook,
    ticker,
});

export default rootReducer;
