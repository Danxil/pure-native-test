/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// https://github.com/jhen0409/react-native-debugger/issues/242
if (__DEV__) {
  /* eslint no-undef: 0, no-global-assign: 0 */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
}
AppRegistry.registerComponent(appName, () => App);
