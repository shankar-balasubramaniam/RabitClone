import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';

const IntroNavigator = () => {
  const IntroStack = createNativeStackNavigator();

  return (
    <IntroStack.Navigator screenOptions={{headerShown: false}}>
      <IntroStack.Screen name="Intro" component={IntroScreen} />
    </IntroStack.Navigator>
  );
};

export default IntroNavigator;
