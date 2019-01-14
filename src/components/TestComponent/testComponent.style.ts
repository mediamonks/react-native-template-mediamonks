import { StyleSheet } from 'react-native';
import { typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  welcome: {
    ...typography.h1,
    textAlign: 'center',
  },
  description: {
    ...typography.p1,
    textAlign: 'center',
    marginVertical: 15,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    marginVertical: 10,
  },
});
