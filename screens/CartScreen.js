import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import ContentWrapper from '../components/ContentWrapper';
import CartItem from '../components/CartItem';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function CartScreen() {
  return (
    <ContentWrapper>
      <View>
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItem
            image={'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'}
          />
          <CartItem
            image={'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'}
          />

          <CartItem
            image={'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'}
          />

          <CartItem
            image={'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'}
          />

          <CartItem
            image={'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'}
          />

          <CartItem
            image={'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'}
          />
          <View style={{ marginBottom: 140 }} />
        </ScrollView>
      </View>
      <View style={styles.cartBottom}>
        <Text>TOTAL</Text>
      </View>
    </ContentWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  cartBottom: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    backgroundColor: '#fbfbfb',
    width: Width,
  }
});
