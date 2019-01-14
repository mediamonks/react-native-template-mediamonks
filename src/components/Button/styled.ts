import styled from 'styled-components/native';
import { colors } from '../../themes';

export const Touchable = styled.TouchableOpacity`
  padding-horizontal: 10;
  padding-vertical: 10;
  margin-horizontal: 10;
  margin-vertical: 10;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  background-color: ${colors.button};
`;

export const Text = styled.Text`color: white;`;
