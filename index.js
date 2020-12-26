/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import ejdahaStore from './redux/Store'


const NewApp = () =>(
    <Provider store = {ejdahaStore}>
        <App/>
    </Provider>
)



AppRegistry.registerComponent(appName, () => NewApp);
