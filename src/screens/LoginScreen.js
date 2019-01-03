'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import Login from '../components/Login';

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
        <Login navigation={this.props.navigation}/>
      </View>
    );
  }
}
