import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import DonateScreen from './screens/DonateScreen'
import RequestScreen from './screens/RequestScreen'
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
     <LoginScreen/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
