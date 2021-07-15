import React from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';
import { getLocalizedString } from '../../utils/localizedUtils';
import Pages from '../../enum/Pages';
import styles from './home.style';

const localizedCopy = (value: string) => getLocalizedString({ key: Pages.HOME, value });

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.envTitle}>{`TITLE: ${localizedCopy('title')}`}</Text>
    <Text style={styles.envTitle}>{`ENVIRONMENT: ${Config.ENV}`}</Text>
  </View>
);

export default Home;
