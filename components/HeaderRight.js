import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default function HeaderRight() {
  return (
    <>
      <View style={styles.headerWrap}>
        <Text>ICON-1</Text>
        <Text>ICON-2</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    display: 'flex',
    paddingRight: '10%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
