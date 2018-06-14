import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { testComponent } from '../../enum/TestIDs';
import styles from './testComponent.style';
import Button from '../Button';
import { getLocalizedString } from '../../utils/localizedUtils';

const TestComponent = ({ counterValue, incrementCounterValue, decrementCounterValue }) => (
  <View style={styles.container} testID={testComponent.CONTAINER}>
    <Text style={styles.welcome}>{getLocalizedString('gettingStarted.title')}</Text>
    <Text style={styles.description}>{getLocalizedString('gettingStarted.description')}</Text>
    <View style={styles.counterContainer}>
      <Text testID={testComponent.COUNTER_VALUE}>Counter value: {counterValue}</Text>
      <Button
        style={styles.button}
        testID={testComponent.INCREMENT_BUTTON}
        title={'Increment counter value'}
        onPress={incrementCounterValue}
      />
      <Button
        style={styles.button}
        testID={testComponent.DECREMENT_BUTTON}
        title={'Decrement counter value'}
        onPress={decrementCounterValue}
      />
    </View>
  </View>
);

TestComponent.propTypes = {
  counterValue: PropTypes.number,
  incrementCounterValue: PropTypes.func,
  decrementCounterValue: PropTypes.func,
};

export default TestComponent;
