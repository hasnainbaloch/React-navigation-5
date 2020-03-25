import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

import ContentWrapper from '../components/ContentWrapper';

export default function SearchScreen() {
  return (
    <ContentWrapper>
      <View>
        <Text>Search!!!  Screen</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
      </View>
    </ContentWrapper>
  );
}
