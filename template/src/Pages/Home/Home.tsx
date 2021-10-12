import React from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';
import { getLocalizedString } from '../../utils/localizedUtils';
import Pages from '../../enum/Pages';
import styles from './home.style';
import { Button } from 'react-native';

const localizedCopy = (value: string) => getLocalizedString({ key: Pages.HOME, value });

interface Props {
  increment: () => {};
}

const Home = ({ increment }: Props) => (
  <View style={styles.container}>
    <Text style={styles.envTitle}>{`TITLE: ${localizedCopy('title')}`}</Text>
    <Text style={styles.envTitle}>{`ENVIRONMENT: ${Config.ENV}`}</Text>
    <Button title={'increment'} onPress={increment} />
  </View>
);

export default Home;
