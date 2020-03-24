import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export default ProductCard = props => {
  return (
    <>
      <TouchableOpacity style={styles.cardWrap}>
        <View style={styles.product}>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{uri: props.image}}
            />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.title}>Nivia Lotion</Text>
            <Text style={styles.price}>PKR 89878</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden',
    flexBasis: "46%", 
    backgroundColor: '#ffffff',
    marginBottom: 15,
    
},
  imageWrap: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  price:{

    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  title:{
      marginBottom: 5
  }
});
