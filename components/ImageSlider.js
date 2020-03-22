import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Button
} from "react-native";

import { SimpleText } from "./StyledText";
import { BUTTON } from "./Button";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export const ImageSlider = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[
          {
            id: 1,
            text:
              "lorem ipsume text with and without, lorem ipsume text. avialable 24/7",
            image: require("../assets/images/Base.jpg")
          },
          {
            id: 2,
            text: "Grocery is cheap",
            image: require("../assets/images/Base.jpg")
          },
          {
            id: 3,
            text: "Fruits are fresh",
            image: require("../assets/images/Base.jpg")
          },
          {
            id: 4,
            text: "Fast Food is ready",
            image: require("../assets/images/Base.jpg")
          },
          {
            id: 5,
            text: "Vegitabbles are green",
            image: require("../assets/images/Base.jpg")
          }
        ]}
        renderItem={({ item }) => (
          <View>
            <View style={styles.imageWrapper}>
              <View style={styles.textWrap}>
                <SimpleText style={styles.text}>{item.text}</SimpleText>
                <BUTTON
                  name="ios-arrow-forward"
                  size={20}
                  color="#fff"
                  iconBg="#454545"
                  btnStyle={{ backgroundColor: "#454545", padding: 5 }}
                  textStyle={{ fontSize: 16, color: "#ffffff" }}
                >
                  View More
                </BUTTON>
              </View>
              <Image style={styles.image} source={item.image} />
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
    height: Height / 3,
    marginRight: 12,
    position: "relative",
    backgroundColor: "#454545",
    borderRadius: 10
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%"
  },

  textWrap: {
    position: "absolute",
    backgroundColor: "rgba(96,100,109, 0.8)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    top: "20%",
    left: "5%",
    width: "60%",
    zIndex: 99
  },
  text: {
    color: "#ffffff"
  }
});
