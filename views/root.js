'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Child from './child';
class RootView extends Component {
  goNext(){
    this.props.navigator.push({
      title: 'Chile View title',
      component: Child,
      passProps: {myElement: 'child element' },

    });
  };
  render(){
    return(
         <View style={styles.container}  >
         <TouchableHighlight
         style={styles.button}
         onPress={this.goNext.bind(this)}>
         <Text style={styles.btnText}>Go to next view</Text>
         </TouchableHighlight>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#f8f8f8',
     padding: 10
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#414125',
    justifyContent: 'center'
  },

  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6
  },

});

module.exports = RootView
