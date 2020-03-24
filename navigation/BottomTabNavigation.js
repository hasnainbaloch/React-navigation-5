import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/LandingScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={LandingScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}
