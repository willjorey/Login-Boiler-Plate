'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    KeyboardAvoidingView
} from 'react-native';
import {guideWidth } from '../constants'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Async from '../components/Async';
import Profile from '../components/Profile';

class newLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            pass: "",
            re_pass: "",
        };
    }
    setUsername = (value) =>{
        this.setState({
            user: value,
        });
    };
    setPassword = (value) =>{
        this.setState({
            pass: value,
        });

    };
    checkNonEmpty = () => {
        if( this.state.name === "" || this.state.email === "" || this.state.pass === ""){
            return false;
        }else{
            return true;
        }
    }

    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={5} behavior="position" style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <View style={{padding:10}}>
                            <Text style={styles.textHeader}>Name</Text>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} underlineColorAndroid="transparent" value={this.state.name} onChangeText={(value) => {this.setState({name: value})}}/>
                            </View>
                        </View>

                        <View style={{padding:10}}>
                            <Text style={styles.textHeader}>E-mail</Text>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} underlineColorAndroid="transparent" value={this.state.email} onChangeText={(value) => {this.setState({email: value})}}/>
                            </View>
                        </View>

                        <View style={{padding:10}}>
                            <Text style={styles.textHeader}>Password</Text>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.pass} onChangeText={(value) => {this.setPassword(value)}}/>
                            </View>
                        </View>

                        <View style={{padding:10}}>
                            <Text style={styles.textHeader}>Re-Type Password</Text>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.re_pass} onChangeText={(value) => {this.setState({re_pass: value})}}/>
                            </View>
                        </View>

                        <View style={{padding: 5, alignItems:'center'}}>
                            <TouchableOpacity style={styles.signupButton} onPress={() => {this.createLogin()}}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                         </View>
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
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(newLogin);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textContainer:{
        top:'10%',
    },
    input: {
        height: 30,
        width: '100%'
    },
    textHeader: {
        color: '#52CBBA',
        fontSize:15,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
    inputContainer:{
        width: guideWidth,
        borderBottomWidth: 1,
        borderColor: '#52CBBA',

    },
    buttonText:{
        fontSize:20,
        color: '#52CBBA',
      },
    signupButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#52CBBA',
        top:0,
    },
  });