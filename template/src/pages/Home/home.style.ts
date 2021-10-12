import { StyleSheet } from 'react-native';
import { colors, typography } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  envTitle: {
    ...typography.h1,
  },
});
