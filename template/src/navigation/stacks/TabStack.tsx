import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../routes';
import Pages from '../../enum/Pages';
import Icon from '../../components/Icon';
import { Icons } from '../../enum/Icons';

const Tab = createBottomTabNavigator();

const tabPages = [Pages.HOME];

const TabStack = ({}) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === Pages.HOME) {
          iconName = Icons.HOME;
        }
        return iconName ? <Icon name={iconName} size={size} color={color} /> : null;
      },
    })}>
    {tabPages.map(tabName => {
      return <Tab.Screen name={tabName} component={routes[tabName]} key={tabName} />;
    })}
  </Tab.Navigator>
);

export default memo(TabStack);
