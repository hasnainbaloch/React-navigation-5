import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function CartItem(props) {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.itemDetail}>
        <Text style={styles.itemName}>Product</Text>
        <Text style={styles.itemDescription}>Product description </Text>
        <Text style={styles.itemPrice}>PKR: 9999</Text>
        <View style={styles.btnCounter}>
          <TouchableOpacity style={styles.btnWrap}>
            <Icon name="minus" color={'#454545'} size={20} />
          </TouchableOpacity>
          <Text>99999</Text>
          <TouchableOpacity style={[styles.btnWrap, { marginLeft: '10%' }]}>
            <Icon name="plus" color={'#454545'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageWrapper: {
    backgroundColor: '#ffffff',
    width: 130,
    height: 130,
    borderRadius: 130,
    overflow: 'hidden',
    marginRight: '10%',
    padding: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  itemDetail: {
    flex: 3
  },
  itemName: {
    fontSize: 16,
    paddingBottom: 2
  },
  itemDescription: {
    fontSize: 14,
    paddingBottom: 10
  },
  itemPrice: {
    fontSize: 16,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 40,
    width: 40,
    height: 40,
    marginRight: '10%',
  },
  btnCounter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
