import React from 'react';
import { Grid, Col, Text, Row } from 'native-base';
import useWebSocket from '../../common/utils/useWebSocket';
import { useSelector } from 'react-redux';
import { StyleSheet, Image } from 'react-native';

const returnValue =(ticker,index)=>{
    try {
        return ticker[1][index].toFixed(0)
    } catch (error) {
        return 0
    }
}

const returnPercent =(ticker,index)=>{
    try {
        return ticker[1][index]
    } catch (error) {
        return 0
    }
}

const Ticker = () => {
    useWebSocket({ event: 'subscribe', channel: 'ticker', symbol: 'tBTCUSD' },'ticker')
    const ticker = useSelector(state=>state.ticker.getIn(['ticker']))
    return (
        <Grid style={styles.container}>
             <Image
        style={styles.image}
        resizeMode={"stretch"}
        source={require("../assets/btc.png")}
      />
            <Col>
            
            <Text style={styles.title}>BTC/TUSD</Text>
            
            <Text style={styles.subTitle}>VOL  {returnValue(ticker,7)} BTC</Text>
            <Text style={styles.subTitle}>Low  {returnValue(ticker,9)}</Text>
            
            
            </Col>
            <Col style={styles.right}>

        <Text style={styles.title}>{returnValue(ticker,6)}</Text>
        <Text style={{...styles.subTitle,color:Number(returnValue(ticker,4))>0?'green':'red'}}>{returnValue(ticker,4)}   ({ returnPercent(ticker,5)}%)</Text>
        <Text style={styles.subTitle}>High  {returnValue(ticker,8)}</Text>

            
            </Col>
        </Grid>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop:100  
    },
    right: {
        left:"100%"
    },
    title: {
      fontSize: 20,
      color: "#C3C3EE",

    },
    subTitle: {
      color: "lightgrey",
      fontSize:12
    },
    image:{
        marginLeft:-50,
        height:50,
        width:50
    }
  
  });
export default Ticker;