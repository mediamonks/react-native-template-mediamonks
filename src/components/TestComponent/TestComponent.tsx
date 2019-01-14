import React from 'react';
import { Text } from 'react-native';
import { TestComponent } from '../../enum/TestIDs';
import { Container, Welcome, Description, CounterContainer, CounterButton } from './styled';
import { getLocalizedString } from '../../utils/localizedUtils';
import { LOCALIZED, COPY } from './enum';
import { IProps } from '.';

export default ({ counter, anotherCounter, increment, decrement }: IProps) => (
  <Container testID={TestComponent.CONTAINER}>
    <Welcome>{getLocalizedString(LOCALIZED.Title)}</Welcome>
    <Description>{getLocalizedString(LOCALIZED.Description)}</Description>
    <CounterContainer>
      <Text testID={TestComponent.COUNTER_VALUE}>{`${COPY.CounterValue} ${counter}`}</Text>
      <Text
        testID={TestComponent.COUNTER_VALUE}
      >{`${COPY.AnotherCounterValue} ${anotherCounter}`}</Text>
      <CounterButton
        testID={TestComponent.INCREMENT_BUTTON}
        title={COPY.IncrementTitle}
        onPress={increment}
      />
      <CounterButton
        testID={TestComponent.DECREMENT_BUTTON}
        title={COPY.DecrementTitle}
        onPress={decrement}
      />
    </CounterContainer>
  </Container>
);
