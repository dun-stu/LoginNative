/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import myApp from './src/myApp';
import {name as appName} from './app.json';

const ApptoRun = myApp;
AppRegistry.registerComponent(appName, () => ApptoRun);
