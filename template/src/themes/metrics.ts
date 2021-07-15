import { Dimensions } from 'react-native';
import {
  s as RNScale,
  vs as RNVerticalScale,
  ms as RNModScale,
  mvs as RNModVScale,
} from 'react-native-size-matters';
const { height, width } = Dimensions.get('window');

const scale = (size: number) => RNScale(size);
const scaleVertical = (size: number) => RNVerticalScale(size);
/**
 * Sometimes you don't want to scale everything in a linear manner, that's where moderateScale comes in.
 * The cool thing about it is that you can control the resize factor (default is 0.5).
 * If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:
 *
 */
const modScale = (size: number, factor?: number) => RNModScale(size, factor);
const modScaleVertical = (size: number, factor?: number) => RNModVScale(size, factor);

export default {
  screenHeight: height,
  screenWidth: width,
  scale,
  scaleVertical,
  modScale,
  modScaleVertical,
};
