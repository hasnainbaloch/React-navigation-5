import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';
import ContentWraper from '../components/ContentWrapper';
import ShippingAddress from '../components/ShippingAddress';
import PaymentMethods from '../components/PaymentMethods';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function CheckoutScreen(props) {
  return (
    <ContentWraper>
      <View>
        <View style={styles.scrollView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Checkout</Text>
            <ShippingAddress />

            {/* payment method */}
            <PaymentMethods />
            <Text style={styles.contentTitle}>ITEMS</Text>
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <>
                  <CartItem
                    key={i}
                    image={
                      'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'
                    }
                  />
                  <KeyboardAvoidingView
                    behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <TextInput
                      multiline
                      style={styles.messageBox}
                      placeholder="message to seller (optional)"
                    />
                  </KeyboardAvoidingView>
                </>
              );
            })}
            {/* <View style={{marginBottom: 40}} /> */}
          </ScrollView>
        </View>
      </View>
      <View style={styles.cartBottom}>
        <CartTotal btnText={'Place Order'} clicked={() => props.navigation.navigate('Home')} />
      </View>
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
  contentTitle: {
    textTransform: 'uppercase',
    color: '#929EB4',
    paddingBottom: 10,
  },
  messageBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10,
    paddingBottom: 10,
    paddingLeft: 170,
    marginTop: -20,
  },
  cartBottom: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    backgroundColor: '#F5F6F8',
    width: Width,
    borderTopColor: '#cccccc',
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
});
