import React, { memo } from 'react';
import { CardItem, Grid, Col, Text, View } from 'native-base';
import multiplier from '../../common/utils/multiplier'
import { StyleSheet } from 'react-native';

const getDepthData = (barDepthAmount,order,percision) =>{
    if(barDepthAmount){
        return parseInt(Math.abs(order[2])*multiplier["AMOUNT"]["BTC"][percision])
    }else{
        return parseInt(order[3]* multiplier["CUMULATIVE"]["BTC"][percision])
    }
}

const OrderbookCardItem = memo((props ) => {
    const { component, order,barDepthAmount,percision } = props
    return (
        <Grid >
            
            {component === 'buy' && <Col>
            
                <CardItem  style={styles.cardItem} >
                <View style={{width:`${getDepthData(barDepthAmount,order,percision)}%`,height:"200%",backgroundColor:'rgba(0,128,100,0.5)',position:'absolute',right:"1%"}}></View>
                    <Col >
                    
                        <Text style={styles.cardText}>{Math.abs(order[2]).toFixed(4)}</Text>
                    </Col>

                    <Col style={{alignItems:'flex-end'}}>
                        <Text style={styles.cardText}>{order[0]}</Text>
                       
                    </Col>
                  
                </CardItem>
                
            </Col>
            }
            {component === 'sell' && <Col>
                <CardItem  style={styles.cardItem}>
                <View style={{width:`${getDepthData(barDepthAmount,order,percision)}%`,height:"200%",backgroundColor:'rgba(178,34,34,0.4)',position:'absolute',alignSelf:'flex-end'}}></View>
                    <Col style={{alignItems:'flex-start'}}>
                        <Text style={styles.cardText}>{order[0]}</Text>
                    </Col>
                    <Col >
                        <Text style={styles.cardText}>{Math.abs(order[2]).toFixed(4)}</Text>
                    </Col>

                </CardItem>
            </Col>
            }
        </Grid>

    );
});

const styles = StyleSheet.create({
    cardItem: {
         backgroundColor: "#1b262d" ,marginBottom:1
    },
    cardText:{
         fontSize: 15, color: '#ffffff'
    }
  });


export default OrderbookCardItem;