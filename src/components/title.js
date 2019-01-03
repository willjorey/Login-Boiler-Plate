'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class Title extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if( this.props.profile !== {}){
            this.props.logout();
        };
        // this.props.getData(); //call our action
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/vybe_alt.jpg')} style={styles.logo}/>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={{padding: 5,}}>
                        <TouchableOpacity style={styles.signupButton} onPress={() => {this.props.navigation.navigate('SignUp')}}>
                            <Text style={styles.signupText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{padding: 5,}}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => {this.props.navigation.navigate('Login')}}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
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
// Just by doing this, we will have access to the actions defined in out actions file (action/Title.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Title);

const styles = StyleSheet.create({
    logo:{
        height:200,
        width:200,
        top:'50%'
    },
    container: {
        width:'100%',
        height:'100%',
      alignItems:'center',
      
    },
    signupText:{
        color: 'white',
        fontSize: 20,
    },
    loginText:{
        color: '#52CBBA',
        fontSize: 20,
    },

    buttonContainer:{
        top:'25%',
    },
    signupButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#52CBBA',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#52CBBA',
        height: 55,
        width:200,
        
    },
    loginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#52CBBA',
        height: 55,
        width:200,
        
    }

  });