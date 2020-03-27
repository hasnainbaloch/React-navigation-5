import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import LandingScreen from '../screens/LandingScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';

import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#515C6F',
        inactiveTintColor: '#a6a6a6',
        keyboardHidesTabBar: true,
        labelStyle:{
          fontWeight: 'bold',
          fontSize: 14  
        },
        style:{
          paddingTop: Platform.OS === 'ios' ? 10 : 5,
          height: Platform.OS === 'ios' ? 90 : 60
        }
      }}
      >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={LandingScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search1" color={color} size={size} />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shoppingcart" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
