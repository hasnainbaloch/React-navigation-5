import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

export default function contentWrapper(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>{props.children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    paddingTop: '15%',
    height: '100%',
  },
});
