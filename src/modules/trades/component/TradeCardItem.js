import React from 'react';
import { CardItem, Text, Grid, Col,  } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
const TradeCardItem = ({props}) => {
    const {trade} = props 
    const timeStamp = new Date(trade.item[1])
    const amount =  trade.item[2]
    const price  = trade.item[3] 


    return (
        <Grid >
            <Col>
                    <CardItem  style={{ backgroundColor: "#1b262d", marginBottom: 2,height:40 }}>
                        {amount>0&& <AntDesign name="caretup" size={15} color="green"  />}
                        {amount<0 && <AntDesign name="caretdown" size={15} color="red"  />}
                        <Col >
                            <Text style={{ fontSize: 15, color: '#ffffff', marginTop: 0 }}>{timeStamp.getHours()}:{timeStamp.getMinutes()}:{timeStamp.getSeconds()} </Text>
                        </Col>
                        
                        <Col style={{marginLeft:"15%"}}>
                            <Text style={{ fontSize: 15, color: '#ffffff', marginTop: 0,alignSelf:'flex-start' }}>{price.toFixed(0)} </Text>
                        </Col>
                        <Col>
                            <Text style={{ alignSelf: 'flex-end' , color: '#ffffff'}}>{Math.abs(amount.toFixed(4))}</Text>
                        </Col>
                    </CardItem>
                </Col>
      
             </Grid>
    );
};


export default TradeCardItem;