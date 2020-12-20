import React from 'react';
import { CardItem, Text, Grid, Col,  } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from 'react-native';
const TradeCardItem = ({props}) => {
    const {trade} = props 
    const timeStamp = new Date(trade.item[1])
    const amount =  trade.item[2]
    const price  = trade.item[3] 


    return (
        <Grid>
            <Col>
                    <CardItem  style={styles.cardItem}>
                        {amount>0&& <AntDesign name="caretup" size={15} color="green"  />}
                        {amount<0 && <AntDesign name="caretdown" size={15} color="red"  />}
                        <Col >
                            <Text style={styles.cardText}>{timeStamp.getHours()}:{timeStamp.getMinutes()}:{timeStamp.getSeconds()} </Text>
                        </Col>
                        
                        <Col style={{marginLeft:"15%"}}>
                            <Text style={{ ...styles.cardText,alignSelf:'flex-start' }}>{price.toFixed(0)} </Text>
                        </Col>
                        <Col>
                            <Text style={{...styles.cardText, alignSelf: 'flex-end' }}>{Math.abs(amount.toFixed(4))}</Text>
                        </Col>
                    </CardItem>
                </Col>
      
             </Grid>
    );
};

const styles = StyleSheet.create({
    cardItem: {
         backgroundColor: "#1b262d", marginBottom: 2,height:40 
    },
    cardText:{
         fontSize: 15, color: '#ffffff'
    }
  });



export default TradeCardItem;