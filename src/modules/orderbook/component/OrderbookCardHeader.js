import React, { memo } from 'react';
import { CardItem, Grid, Col, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const OrderbookCardHeader = memo((props) => {

    const {percision,setPrecision,setBarDepthAmount} = props
    const precNumber = Number(percision.slice(1))
    return (
        <CardItem style={styles.cardItem}>
             <AntDesign name="barschart" size={15} color="white" onPress={()=>setBarDepthAmount(prevDepth=>!prevDepth)} />
            <Grid>
                <Col>
                <Text style={styles.cardText}>AMOUNT</Text>
                </Col>
               <Col>
               <Text  style={{...styles.cardText,alignSelf:"flex-end",marginRight:10}}>PRICE</Text>
               </Col>
               <Col>
               <Text  style={styles.cardText}>PRICE</Text>
               </Col>
               <Col>
               <Text  style={styles.cardText}>AMOUNT</Text>
               </Col>
               
            </Grid>
           
            <AntDesign name="plus" size={15} color="white" onPress={()=>setPrecision(prevPrecision=>precNumber>0?"P"+(precNumber-1):prevPrecision )} />
            <AntDesign name="minus" size={15} color="white" onPress={()=>setPrecision(prevPrecision=>precNumber<4?"P"+(precNumber+1):prevPrecision )} />
        </CardItem>
    );
});

const styles = StyleSheet.create({
    cardItem: {
        backgroundColor:'#1b262d',
        height:50,
    },
    cardText:{
        color:"lightgrey",fontSize:14
    }
  });

export default OrderbookCardHeader;