import React, { memo } from 'react';
import { CardItem, Grid, Col, Text, View } from 'native-base';
import multiplier from '../../common/utils/multiplier'

const getDepthData = (barDepthAmount,order,percision) =>{
    if(barDepthAmount){
        return parseInt(Math.abs(order[2])*multiplier["AMOUNT"]["BTC"][percision])
    }else{
        return parseInt(order[3]* multiplier["BTC"][percision])
    }
}

const OrderbookCardItem = memo((props ) => {
    const { component, order,barDepthAmount,percision } = props
    return (
        <Grid >
            
            {component === 'buy' && <Col>
            
                <CardItem  style={{ backgroundColor: "#1b262d" ,marginBottom:1}}>
                <View style={{width:`${getDepthData(barDepthAmount,order,percision)}%`,height:"200%",backgroundColor:'rgba(0,128,100,0.5)',position:'absolute',right:"1%"}}></View>
                    <Col >
                    
                        <Text style={{ fontSize: 15, color: 'white' }}>{Math.abs(order[2]).toFixed(4)}</Text>
                    </Col>

                    <Col style={{alignItems:'flex-end'}}>
                        <Text style={{ fontSize: 15 ,color: 'white'}}>{order[0]}</Text>
                       
                    </Col>
                  
                </CardItem>
                
            </Col>
            }
            {component === 'sell' && <Col>
                <CardItem  style={{ backgroundColor: "#1b262d" ,marginBottom:1}}>
                <View style={{width:`${getDepthData(barDepthAmount,order,percision)}%`,height:"200%",backgroundColor:'rgba(178,34,34,0.4)',position:'absolute',alignSelf:'flex-end'}}></View>
                    <Col style={{alignItems:'flex-start'}}>
                        <Text style={{ fontSize: 15,color:'white' }}>{order[0]}</Text>
                    </Col>
                    <Col >
                        <Text style={{ fontSize: 15,color:'white' }}>{Math.abs(order[2]).toFixed(4)}</Text>
                    </Col>

                </CardItem>
            </Col>
            }
        </Grid>

    );
});

export default OrderbookCardItem;