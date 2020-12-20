/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {StatusBar,Platform} from 'react-native';
import AppRouter from './router'
import { Provider } from 'react-redux';
import rootReducer from './rootReducer'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {

  return (
    
    <Provider store={store}>
          <AppRouter>
          </AppRouter>
     </Provider>
  );
};
export default App;
