import React, { useEffect, useState, useRef, useCallback } from 'react';
import {  Grid, Col, Container } from 'native-base';
import useWebSocket from '../common/utils/useWebSocket';
import { useSelector, useDispatch } from 'react-redux';
import OrderbookCardItem from './component/OrderbookCardItem';
import { ScrollView, View, StyleSheet } from 'react-native';
import { closeSocket, openSocket } from '../common/actions/websocket';
import OrderbookCardHeader from './component/OrderbookCardHeader';
let sumAsks=0;
let sumBids=0;

const updateCummulativeData = (data,sum) =>{
    if(sum==="asks"){
        data.push(sumAsks+Math.abs(Number(data[2])))
        sumAsks=sumAsks+Math.abs(Number(data[2]))
    }else{
        data.push(sumBids+Number(data[2]))
        sumBids=sumBids+Number(data[2])
    }
   
}

const Orderbook = () => {
    const dispatch = useDispatch()
    const[percision, setPrecision] = useState('P0')
    const[barDepthAmount,setBarDepthAmount] = useState(false)
    const [reloadSocket,setReloadSocket] = useState(false)
    useWebSocket({event: 'subscribe', channel: 'book', symbol: 'tBTCUSD',prec:percision},"orderbook",reloadSocket)
    const memoizedCallback = useCallback(setPrecision, []);
    const memoizedSetBarDepthAmount = useCallback(setBarDepthAmount, []);
    const asks = useSelector(state=>state.orderbook.getIn(['orderbook','asks']))
    const bids = useSelector(state=>state.orderbook.getIn(['orderbook','bids']))

    useEffect(()=>{
        sumBids=0;
        sumAsks=0;
        return ()=>{
            sumBids=0;
            sumAsks=0;
        }
    },[asks])


    useEffect(()=>{
        console.log("reloading")
          sumBids=0;
        sumAsks=0;
      setReloadSocket(reloadSock=>!reloadSock)
    },[percision])


    return (
        <Container >
        <OrderbookCardHeader setPrecision={memoizedCallback} percision={percision} setBarDepthAmount={memoizedSetBarDepthAmount}/ >
             <Grid >              
                <Col>
                    <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'#273640'}}>
                        {bids.map(data =>{ 
                            if(barDepthAmount!=='amount'){updateCummulativeData(data,"bids")}
                            return <OrderbookCardItem  component='buy'order={data} barDepthAmount={barDepthAmount} percision={percision}/>}
                            ) }
                    </ScrollView>
                </Col>

                <Col>
                    <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'#273640'}}>
                        {asks.reverse().map(data => { 
                            if(barDepthAmount!=='amount'){updateCummulativeData(data,"asks")}
                            return <OrderbookCardItem  component='sell' order={data} barDepthAmount={barDepthAmount} percision={percision} />}
                            ) }
                    </ScrollView>
                </Col>
            </Grid>
        </Container>
    );
};



export default Orderbook;