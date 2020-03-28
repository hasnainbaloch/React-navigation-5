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
import CartTotal from '../components/CartTotal';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function CartScreen(props) {
  return (
    <ContentWrapper>
      <View>
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {[1, 1, 1, 1, 1].map((item, i) => {
            return (
              <>
                <CartItem
                  image={
                    'https://i.ya-webdesign.com/images/lotion-bottle-png-3.png'
                  }
                />
              </>
            );
          })}

          <View style={{marginBottom: 140}} />
        </ScrollView>
      </View>
      <View style={styles.cartBottom}>
        <CartTotal btnText={'CHECKOUT'} clicked={() => props.navigation.navigate('Checkout')} />
      </View>
    </ContentWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#515C6F',
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
