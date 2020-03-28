import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PaymentMethods() {
  return (
    <View>
      <Text style={styles.title}>Payment Methods</Text>
      <View style={styles.method}>
        <View style={styles.icon}>
          <Icon name={'wallet'} size={12} color={'#515C6F'}/>
        </View>
        <Text style={styles.methodName}>Cash on delivery</Text>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    color: '#929EB4',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 50
  },
  method: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#515C6F'
  },
  horizontalLine: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
