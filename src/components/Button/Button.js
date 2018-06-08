import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './button.style';

const Button = ({ title, onPress, style, fontStyle, testID }) => (
  <TouchableOpacity testID={testID} style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.fontStyle, fontStyle]}> {title} </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: Text.propTypes.style,
  fontStyle: Text.propTypes.style,
  testID: PropTypes.string,
};

export default Button;
