import { StackNavigator } from 'react-navigation'

import { AccelerometerScreen } from './AccelerometerScreen'
import { BlurView1Screen } from './BlurView1Screen'
import { BlurView2Screen } from './BlurView2Screen'
import { BrightnessScreen } from './BrightnessScreen'
import { FontScreen } from './FontScreen'
import { LinearGradientScreen } from './LinearGradientScreen'
import { MainScreen } from './MainScreen'
import { MapViewScreen } from './MapViewScreen'
import { SvgScreen } from './SvgScreen'

export default StackNavigator({
  // tslint:disable:object-literal-sort-keys
  Main: { screen: MainScreen },

  Accelerometer: { screen: AccelerometerScreen },
  BlurView1: { screen: BlurView1Screen },
  BlurView2: { screen: BlurView2Screen },
  Brightness: { screen: BrightnessScreen },
  Font: { screen: FontScreen },
  LinearGradient: { screen: LinearGradientScreen },
  MapView: { screen: MapViewScreen },
  Svg: { screen: SvgScreen },
})