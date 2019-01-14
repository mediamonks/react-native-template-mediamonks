import Button from '../Button';
import styled from 'styled-components/native';
import { typography } from '../../themes';

export const Container = styled.View`
  flex: 1;
  margin-top: 50;
  align-items: center;
  margin-horizontal: 20;
`;

export const CounterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 30;
`;

export const CounterButton = styled(Button)`
  margin-vertical: 10;
`;

export const Welcome = styled(typography.H1)`
  text-align:center;
`;

export const Description = styled(typography.P1)`
  text-align:center;
  margin-vertical:15;
`;
