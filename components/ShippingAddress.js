import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ShippingAddress() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Shipping Address</Text>
      <Text style={styles.customerName}>Customer Name</Text>
      <View style={styles.addressWrapper}>
        <Text style={styles.customerAddress}>
          House No 123, Sub street 11, Main street A10, City Name, Provice,
          Country.
        </Text>
        <View style={styles.icon}>
          <Icon name={'right'} size={10} color="#727C8E" />
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  addressWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  title: {
    textTransform: 'uppercase',
    color: '#929EB4',
    marginBottom: 10,
  },
  customerAddress: {
    flex: 2,
    paddingRight: '30%',
  },
  customerName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#515C6F',
    marginBottom: 2
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
    width: 25,
    height: 25,
    
  },
  horizontalLine: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
