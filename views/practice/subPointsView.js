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
        <View style={styles.contain}>
          <Text style={styles.title}>
            预测分
          </Text>

          <Text style={styles.score}>
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

const styles = StyleSheet.create({
  contain:{
    marginTop:15,
    justifyContent: 'space-between',
    marginBottom: 15
  },
  title:{
    marginLeft: 10,
    fontSize: 12
  },
  score:{
    color: 'blue',
    fontSize: 20
  },
});
module.exports = SubPointsView;
