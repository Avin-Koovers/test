import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Grid, Col, Text, CardItem } from 'native-base';

const TradeCardHeader = () => {
    console.log("hello")
    return (

        <CardItem style={{ backgroundColor: "#1b262d", marginBottom: 1, height: 40 }}>
            <Grid>
                <Col>
                    <Text style={styles.cardText}>Time Stamp</Text>
                </Col>
                <Col>
                    <Text style={{ ...styles.cardText, alignSelf: "center", marginRight: 10 }}>PRICE</Text>
                </Col>

                <Col>
                    <Text style={{ ...styles.cardText, alignSelf: 'flex-end' }}>AMOUNT</Text>
                </Col>

            </Grid>

        </CardItem>
    );
};

const styles = StyleSheet.create({
    cardItem: {
        backgroundColor: '#1b262d',
        height: 60,
    },
    cardText: {
        color: "lightgrey", fontSize: 14
    }
});


export default memo(TradeCardHeader) ;