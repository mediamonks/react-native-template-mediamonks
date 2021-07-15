import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icons } from '../../enum/Icons';
import { colors } from '../../themes';

interface Props {
  name: Icons;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 20, color = colors.icon }: Props) => (
  <MaterialIcons name={name} size={size} color={color} />
);
export default Icon;
