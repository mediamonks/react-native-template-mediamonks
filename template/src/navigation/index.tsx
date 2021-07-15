import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import mainStackOptions from './options/mainStackOptions';
import TabStack from './stacks/TabStack';
import Pages from '../enum/Pages';

enableScreens();
const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator screenOptions={mainStackOptions}>
    <Stack.Screen name={Pages.HOME} component={TabStack} />
  </Stack.Navigator>
);

export default MainNavigation;
