/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Main from './app/components/Main.js';


export default class BirdStories extends Component {
  render() {
    return (
        <Main />
    );
  }
}

AppRegistry.registerComponent('BirdStories', () => BirdStories);
