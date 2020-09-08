/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, NativeModules, Alert, Platform } from 'react-native';
import { Provider } from 'react-redux';
import ReduxStore from './src/redux/store/ReduxStore';
import Navigator from './src/navigator/Navigator'

import CheckDevice from './src/module/common/CheckDevice';


 class App extends React.PureComponent{


    async componentDidMount(){
        
        if(Platform.OS === 'android'){
            await CheckDevice.show(CheckDevice.LONG);
        }

        const EmulatorCheck = NativeModules.EmulatorCheck;
        let isEmulator = EmulatorCheck && EmulatorCheck.isEmulator;
    }

    render(){
    return (
            <Provider store={ReduxStore}>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
                    <Navigator />
                </SafeAreaView>
            </Provider>
    );
    }
};

export default App;
