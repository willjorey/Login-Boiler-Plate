import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import TitleScreen from './src/screens/TitleScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

class Nav extends Component {
    render() {
      return (
        <RootStack />
      )
    }
}


export const RootStack = createStackNavigator({
    Title: {
        screen: TitleScreen,
        navigationOptions:{
            header: null,
        }
    },
    Login:{
        screen: LoginScreen,
    },
    SignUp:{
        screen: SignUpScreen,
        navigationOptions:{
            title: 'Sign Up',
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor: '#52CBBA'
            }
        }
    },
})

const mapStateToProps = state => ({
    navigation: state.navigation,
  });

const App = createAppContainer(RootStack)

export default connect(mapStateToProps)(App)