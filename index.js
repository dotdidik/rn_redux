/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Routing from './src/Routing.js';

AppRegistry.registerComponent(appName, () => Routing);
