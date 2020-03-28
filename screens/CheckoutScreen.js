import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContentWraper from '../components/ContentWrapper';
import ShippingAddress from '../components/ShippingAddress';
import PaymentMethods from '../components/PaymentMethods';

export default function CheckoutScreen() {
  return (
    <ContentWraper>
        <Text style={styles.title}>Checkout</Text>
        <ShippingAddress/>

        {/* payment method */}
        <PaymentMethods/>
    </ContentWraper>
  );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#515C6F',
      },
})