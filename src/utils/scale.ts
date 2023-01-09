/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

// const [shortDimension, longDimension] =
//   width < height ? [width, height] : [height, width];

const screenDiagonal = Math.hypot(width, height);

const [defaultScreenWidth, defaultScreenHeight] = [4320 / 11, 7908 / 11]; //sizes that were used for testing
const defaultScreenDiagonal = Math.hypot(
  defaultScreenHeight,
  defaultScreenWidth,
);

const NoScale = (size: number): number => size;

const verticalScale = (size: number): number => (height / defaultScreenHeight) * size;

const horizontalScale = (size: number): number => (width / defaultScreenWidth) * size;

const scale = (size: number) => (screenDiagonal / defaultScreenDiagonal) * size;
/*All values are correct relative to the default dimensions initially
  so these values are multiplied by how much bigger or smaller an actual screen is
  relative to these*/

const noScale = true; //only true when using default device while testing

var Sc: Function, vSc: Function, hSc: Function;

if (noScale) {
  Sc = vSc = hSc = NoScale;
} else {
  Sc = scale;
  vSc = verticalScale;
  hSc = horizontalScale;
}

export {Sc, vSc, hSc};


