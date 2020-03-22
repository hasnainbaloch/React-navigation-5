import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigation from './BottomTabNavigation';
import SettingsScreen from '../screens/SecondScreen';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Root' component={BottomTabNavigation} />
        <Stack.Screen name='Setting' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator


