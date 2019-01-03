'use strict';

import React, { Component } from 'react';
import {View,} from 'react-native';
import SignUp from '../components/SignUp';

export default class SignUpScreen extends Component {


    render() {
        return (
            <View style={{backgroundColor: 'white', flex:1}}>
                <SignUp navigation = {this.props.navigation}/>
            </View>
        );
    }

};
