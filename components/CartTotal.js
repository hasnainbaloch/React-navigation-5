import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BUTTON from './Button';

export default function CartTotal() {
  return (
    <View style={styles.cartTotalWrap}>
      <View style={styles.total}>
        <Text style={styles.totalTitle}>Total</Text>
        <Text style={styles.totalScore}>PKR 99999</Text>
        <Text style={styles.charges}>PKR 99 shipping charges</Text>
      </View>
      <View style={styles.btnWrap}>
        <BUTTON
          name="right"
          size={16}
          color="#454545"
          iconBg="#ffffff"
          btnStyle={{
            backgroundColor: '#454545'
          }}
          textStyle={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#ffffff',
            paddingLeft: 20,
            letterSpacing: 0.2,
          }}
          radius={20}
          pad={5}>
          CHECKOUT
        </BUTTON>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartTotalWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalTitle: {
    color: '#454545',
    fontSize: 16,
  },
  totalScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  charges: {
    color: '#454545',
  },
  total: {
    flex: 2,
  },
  btnWrap: {
    flex: 2,
  },
});
