import React from 'react';
import {View, Text, StyleSheet, ShadowPropTypesIOS} from 'react-native';

import BUTTON from './Button';

export default function CartTotal(props) {
  return (
    <View style={styles.cartTotalWrap}>
      <View style={styles.total}>
        <Text style={styles.totalTitle}>TOTAL</Text>
        <Text style={styles.totalScore}>PKR 99999</Text>
        <Text style={styles.charges}>PKR 99 shipping charges</Text>
      </View>
      <View style={styles.btnWrap}>
        <BUTTON
          click={props.clicked}
          name="right"
          size={16}
          color="#2A2D43"
          iconBg="#ffffff"
          btnStyle={{
            backgroundColor: '#2A2D43'
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
    color: '#929EB4',
    fontSize: 16,
    marginBottom: 5,
  },
  totalScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#515C6F',
  },
  charges: {
    color: '#929EB4',
  },
  total: {
    flex: 2,
  },
  btnWrap: {
    flex: 2,
  },
});
