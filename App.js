import React from 'react';
import store from './src/store'; //Import the store
import { YellowBox } from 'react-native';
import Navigator from './navigation';
import { Provider } from 'react-redux';
YellowBox.ignoreWarnings(['Setting a timer']);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigator/>
      </Provider>
  );
  }
}

