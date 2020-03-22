import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform
} from 'react-native';

import NavTabs from '../components/NavTabs';
import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';

export default function LandingScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <NavTabs />
        <Text style={styles.title}>Latest</Text>
        <ImageSlider />
        <ProductCard />
        <Text>----------------------HOME!!!-------------------</Text>
        <TouchableOpacity>
          <Button
            onPress={() => navigation.navigate('Setting')}
            title="Go to Second screen"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: '2%',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
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
