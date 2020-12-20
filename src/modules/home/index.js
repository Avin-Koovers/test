import React from 'react';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import { Actions } from 'react-native-router-flux';
import { Button, Text } from 'react-native';
import { CardItem, Container } from 'native-base';
import Foreground from './component/Foreground';
import HomeCardItem from './component/HomeCardItem';

const renderList =(props) =>{
  return <Container>{props.map(data=> <HomeCardItem props={data}/> )}</Container>
}

const Home = () => {
    return (
        <StickyParallaxHeader
        headerType="AvatarHeader"
        title={"BITFINEX"}
        subtitle={"Top  Crypto currency list"}
        parallaxHeight={300}
        image={require('./assets/bitfinex.png')}
        renderBody={()=>renderList([["Start Trading","orderbook"],["Market Trades","trade"]])}
        foreground={()=>{return <Foreground/>}}
        backgroundColor={'rgb(16, 35, 49)'}
        rightTopIcon={null}
        leftTopIcon={null}
        bounces={false}
      />
    );
};

export default Home;