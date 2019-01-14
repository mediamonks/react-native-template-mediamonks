import React from 'react';
import { Touchable, Text } from './styled';

interface IProps {
  title: string;
  onPress: () => {};
  testID: string;
}

export default ({ title, onPress, testID }: IProps) => (
  <Touchable testID={testID} onPress={onPress}>
    <Text> {title} </Text>
  </Touchable>
);
