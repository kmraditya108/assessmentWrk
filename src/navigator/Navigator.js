/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeContainer from '../module/welcome/container/WelcomeContainer';
import DashboardContainer from '../module/dashboard/container/DashboardContainer';
import HomeContainer from '../module/home/container/HomeContainer';


const Stack = createStackNavigator();
// const Navigator: () => React$Node = () => {

class Navigator extends PureComponent {

render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeContainer}/>
        <Stack.Screen name="Dashboard" options={{headerShown: true}} component={DashboardContainer}/>
        <Stack.Screen name="Home" component={HomeContainer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Navigator;
