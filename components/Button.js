import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default Button = props => {
  return (
    <>
      <TouchableOpacity style={styles.touchableOpacity} onPress={props.click}>
        <View style={[styles.btnWrap, props.btnStyle]}>
          <Text style={props.textStyle}>{props.children}</Text>
          <View
            style={[styles.btnBack,
              {
                backgroundColor: props.iconBg,
                borderRadius: props.radius,
                padding: props.pad,
              },
            ]}>
            <Icon name={props.name} size={props.size} color={props.color} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  btnBack:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }
});
