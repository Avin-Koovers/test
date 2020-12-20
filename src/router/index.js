/**
 *App Router

 * @format
 * @flow strict-local
 */
import React from 'react';
import 'react-native-gesture-handler';
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import Trade from '../modules/trades';
import Orderbook from '../modules/orderbook';
import Home from '../modules/home';



const AppRouter = () => {

    return (
        <>
        <Router navigationBarStyle={{ backgroundColor: '#1b262d'  }}  titleStyle={{color:"white"}}  backButtonTintColor="white" >
            <Stack key="root" hideNavBar >
                <Scene tabs key="home" component={Home} title="HOME" initial />
                <Scene tabs key="trade" component={Trade} title="TRADES" hideNavBar={false} back={true} />
                <Scene tabs key="orderbook" component={Orderbook} title="ORDERBOOK" hideNavBar={false} back={true} />
            </Stack>
        </Router>

        </>
    );
};



export default AppRouter;
