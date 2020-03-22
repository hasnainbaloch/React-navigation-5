import React from 'react';
import {View, Text, TouchableOpacity, Button, SafeAreaView} from 'react-native';

export default function LandingScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>HOME!!!</Text>
        <TouchableOpacity>
          <Button
            onPress={() => navigation.navigate('Setting')}
            title="Go to Second screen"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
