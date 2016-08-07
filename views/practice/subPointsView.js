'use strict';
import React, {Component} from 'react';

import {
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text,
  Image,
  View
}from 'react-native';

class HeaderScoreView extends Component {
  render(){
    return(
      <View>
        <View style={{marginTop:15, justifyContent: 'space-between', marginBottom: 15}}>
          <Text style={{marginLeft: 10, fontSize: 12}}>
            预测分
          </Text>

          <Text style={{color: 'blue', fontSize: 20}}>
            90
          </Text>

          <Text style={{marginRight: 10, fontSize: 14}}>
          </Text>

        </View>
      </View>
    );
  }
};

class SubPointsView extends Component {
  render(){
    return(
      <HeaderScoreView />
    );
  }
};

module.exports = SubPointsView;
