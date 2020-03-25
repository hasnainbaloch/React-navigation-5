import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function HeaderRight() {
  return (
    <>
      <View style={styles.headerWrap}>
        <Icon style={styles.icon} name="bells" size={20} color="#454545" />
        <Icon style={styles.icon} name="message1" size={20} color="#454545" />
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
  icon:{
    marginRight: 15
  }
});
