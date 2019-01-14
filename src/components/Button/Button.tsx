import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './button.style';

interface IProps {
  title: string;
  testID: string;
  onPress: () => {};
  style: {};
  fontStyle: {};
}

export default ({ title, onPress, style, fontStyle, testID }: IProps) => (
  <TouchableOpacity testID={testID} style={[ styles.container, style ]} onPress={onPress}>
    <Text style={[ styles.fontStyle, fontStyle ]}> {title} </Text>
  </TouchableOpacity>
);
