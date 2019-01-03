'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    KeyboardAvoidingView,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {guideWidth } from '../constants'

import * as Actions from '../actions'; //Import your actions
import Async from './Async';
import Profile from './Profile';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: "",
        };
        this.async = new Async();
    }

    componentDidMount() {
        // this.props.getData(); //call our action
    };

    setUsername = (value) =>{
        this.setState({
            email: value,
        });
    };
    setPassword = (value) =>{
        this.setState({
            pass: value,
        });

    };

    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={-150} behavior='position'style={styles.container}>
                <TouchableHighlight style={{alignItems:'center'}} underlayColor='transparent'>
                    <Image source={require('../../assets/vybe_alt.jpg')} style={styles.logo} />
                </TouchableHighlight>

                <View style={styles.loginContainer}>
                    <View style={{padding:10}}>
                        <Text style={styles.text}>E-Mail</Text>
                        <View style={styles.login}>
                            <TextInput style={styles.input} underlineColorAndroid="transparent" value={this.state.email} onChangeText={(value) => {this.setUsername(value)}}/>
                        </View>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.login}>
                            <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.pass} onChangeText={(value) => {this.setPassword(value)}}/>
                        </View>
                    </View>
                </View>
 
                <View>
                    <View style={{padding: 5, alignItems:'center'}}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => {this.onPressButton()}}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }

};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        profile: state.profileReducer.profile,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/Login.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        aspectRatio: 1,
    },
    logo:{
        height:200,
        width:200,
        top:'25%'
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    loginContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: guideWidth,
        height:200,
        
    },
    login:{
        width:guideWidth,
        borderColor: '#52CBBA',
        borderBottomWidth:1,
    },
    text:{
        fontSize:15,
        color:'#52CBBA',
      },
    createLoginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#52CBBA',
        height: 55,
        width:220,
        borderRadius: 5,
    },
    loginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#52CBBA',
    },
    buttonText: {
        color: "#52CBBA",
        fontSize: 20,
    },
    input:{
        fontSize:20,
    },
  });