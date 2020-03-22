import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/LandingScreen';
import SecondScreen from '../screens/SecondScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={LandingScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
      </Tab.Navigator>
  );
}
