import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import IntroNavigator from './IntroNavigator';
import HomeScreen from '../screens/HomeScreen';

const AppNavContainer = ({introShown = false}) => {
  return (
    <NavigationContainer>
      {introShown ? <HomeScreen /> : <IntroNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
