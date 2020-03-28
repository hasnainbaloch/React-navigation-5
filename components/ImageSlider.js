import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  Platform
} from 'react-native';

import BUTTON from '../components/Button';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default ImageSlider = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[
          {
            id: 1,
            text:
              'lorem ipsume text with and without, lorem ipsume text. avialable 24/7 and for extra will be free!',
            image:
              'https://image.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg',
          },
          {
            id: 2,
            text: 'Grocery is cheap',
            image:
              'https://image.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg',
          },
          {
            id: 3,
            text: 'Fruits are fresh',
            image:
              'https://image.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg',
          },
          {
            id: 4,
            text: 'Fast Food is ready',
            image:
              'https://image.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg',
          },
          {
            id: 5,
            text: 'Vegitables are green',
            image:
              'https://image.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg',
          },
        ]}
        renderItem={({item}) => (
          <View>
            <View style={styles.imageWrapper}>
              <View style={styles.textWrap}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.btnPos}>
                <BUTTON
                  name="right"
                  size={16}
                  color="#fff"
                  iconBg="#454545"
                  btnStyle={{
                    backgroundColor: '#ffffff',
                    padding: 5,
                    marginTop: 20,
                  }}
                  textStyle={{fontSize: 14, color: '#454545', paddingLeft: 20}}
                  radius={20}
                  pad={5}>
                  View More
                </BUTTON>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: Width - 50,
    height: Height / 3.6,
    marginRight: 12,
    position: 'relative',
    backgroundColor: '#454545',
    borderRadius: 10,
    marginBottom: 30,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },

  textWrap: {
    position: 'absolute',
    backgroundColor: 'rgba(96,100,109, 0.8)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    top: '20%',
    left: '5%',
    width: '80%',
    zIndex: 99,
  },
  text: {
    color: '#ffffff',
  },
  btnPos: {
    position: 'absolute',
    width: '60%',
    bottom: 30,
    left: 20,
  },
});
