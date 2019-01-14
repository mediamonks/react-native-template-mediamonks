import React from 'react';
import { Text, View } from 'react-native';
import { TestComponent } from '../../enum/TestIDs';
import styles from './testComponent.style';
import Button from '../Button';
import { getLocalizedString } from '../../utils/localizedUtils';
import { LOCALIZED, COPY } from './enum';
import { IProps } from '.';

export default ({ counter, anotherCounter, increment, decrement }: IProps) => (
  <View style={styles.container} testID={TestComponent.CONTAINER}>
    <Text style={styles.welcome}>{getLocalizedString(LOCALIZED.Title)}</Text>
    <Text style={styles.description}>{getLocalizedString(LOCALIZED.Description)}</Text>
    <View style={styles.counterContainer}>
      <Text testID={TestComponent.COUNTER_VALUE}> {`${COPY.CounterValue} ${counter}`}</Text>
      <Text
        testID={TestComponent.COUNTER_VALUE}
      >{`${COPY.AnotherCounterValue} ${anotherCounter}`}</Text>
      <Button
        style={styles.button}
        testID={TestComponent.INCREMENT_BUTTON}
        title={COPY.IncrementTitle}
        onPress={increment}
      />
      <Button
        style={styles.button}
        testID={TestComponent.DECREMENT_BUTTON}
        title={COPY.DecrementTitle}
        onPress={decrement}
      />
    </View>
  </View>
);
