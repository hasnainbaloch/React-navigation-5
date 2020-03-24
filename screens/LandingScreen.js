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
        <View style={styles.productWrap}>
          <View style={styles.allProducts}>
            {[1, 2, 3, 4, 5].map(item => {
              return (
                <ProductCard image="data:image/jpeg;base64,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" />
              );
            })}
          </View>
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
    fontWeight: 'bold'
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
    justifyContent: 'space-around',
    // paddingLeft: '2%'
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
