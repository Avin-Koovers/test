import React, { memo } from 'react';
import { CardItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

const HomeCardItem = memo(({props}) => {
    let [title,path] = props

    return (
        <CardItem button onPress={()=>Actions.push(path)}  title="Submit" style={styles.cardItem}>
            <Text style={styles.cardText}>{title}</Text>
        </CardItem>
    );
});


const styles = StyleSheet.create({
    cardItem: {
        backgroundColor:'rgb(16, 35, 49)',marginHorizontal:15,height:50,borderRadius:10,justifyContent:'center',marginTop:15
    },
    cardText:{
        color:"#C3C3EE",fontSize:18
    }
  });
  

export default HomeCardItem;