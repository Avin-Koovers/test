import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useWebSocket from '../common/utils/useWebSocket';
import { useSelector } from 'react-redux';
import TradeCardItem from './component/TradeCardItem';
import TradeCardHeader from './component/TradeCardHeader';

const Trades = () => {
    const tradeHistory = useSelector(state=>state.trade.getIn(["tradeHistory"]))
    const trades = []
    useWebSocket({event: 'subscribe',channel: 'trades', symbol: 'tBTCUSD'},"trades")
    
    tradeHistory.map(trade =>trades.unshift(trade))
    return (
        <>
        <TradeCardHeader/>
        { trades.length!==0 &&   <FlatList style={{backgroundColor:"#273640"}}  data={trades} renderItem={ trade  =>  <TradeCardItem props={{trade}} />} /> }
        </>
    );
};

export default Trades;