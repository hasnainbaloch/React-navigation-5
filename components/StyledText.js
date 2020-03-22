import * as React from 'react';
import { Text } from 'react-native';

export function TitleText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'font-bold' }]} />;
}
export function SimpleText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'font-regular' }]} />;
}
