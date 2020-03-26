import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';

import CategoriesTabs from '../components/CategoriesTabs';
import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';
import ContentWrapper from '../components/ContentWrapper';

import {ScrollView} from 'react-native-gesture-handler';

export default function LandingScreen({navigation}) {
  return (
    <ContentWrapper>
      <ImageSlider />
      <Text style={styles.title}>Categories</Text>
      <CategoriesTabs />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.allProducts}>
          {[1, 2, 3, 4, 5].map(item => {
            return (
              <ProductCard image="https://i.ya-webdesign.com/images/lotion-bottle-png-3.png" />
            );
          })}
        </View>
        {/* <TouchableOpacity>
            <Button
              onPress={() => navigation.navigate('Setting')}
              title="Go to Setting screen"
            />
          </TouchableOpacity> */}
      </ScrollView>
    </ContentWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: {width: 0, height: -3},
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  scrollView: {
    paddingBottom: '100%',
  },
  productWrap: {},
  allProducts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    paddingBottom: '30%',
  },
});
//       ios: {
//         shadowColor: "black",
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3
//       },
//       android: {
//         elevation: 20
//       }
//     }),
//     alignItems: "center",
//     backgroundColor: "#fbfbfb",
//     paddingVertical: 20
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: "rgba(96,100,109, 1)",
//     textAlign: "center"
//   }
// });
