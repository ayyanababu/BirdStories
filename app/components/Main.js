/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Signin from './Signin';

export default class Main extends Component {
  render() {
    return (
            <View>
            <StatusBar
                  barStyle="light-content"
            />
            <Router>
                <Scene key="root" hideNavBar={false}>
                    <Scene key="signin"
                           component={Signin}
                           title={"SignIn"}
                           navigationBarStyle={styles.navbarstyle}
                           titleStyle={styles.navTitle}
                           initial={true}/>
                </Scene>
            </Router>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarstyle: {
        backgroundColor: '#066B6B',
    },
    navTitle:{
      color: '#ffffff',
      fontSize: 22,
      fontWeight: '400',
      textAlign: 'center',
    },
});
