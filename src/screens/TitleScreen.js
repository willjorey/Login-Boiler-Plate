import React, { Component } from 'react';
import { View, } from 'react-native';
import Title from '../components/title';

export default class TitleScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1, opacity: 0.9}}>
            <Title navigation={this.props.navigation}/>
      </View>
    );
  }
}
