import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigation from './BottomTabNavigation';
import SettingsScreen from '../screens/SecondScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import HeaderRight from '../components/HeaderRight';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          gestureEnabled: true,
          headerTitle: false,
          headerTransparent: true,

          headerRight: () => (     
            <HeaderRight/>    
          ),
          headerStyle: {
            backgroundColor: '#454545'
          },
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          // headerTintColor: '#ffffff',
          headerBackTitleVisible: false
        }}
        // headerMode='float'
        // headerMode= {false}
        >
        <Stack.Screen name="Root" component={BottomTabNavigation} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
