'use strict'
import React, { Component } from 'react';
import Util from '../../util/util';
import SubPointsView from './subPointsView';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';


var SubjectionView = React.createClass({
  _subjectOnpress:function(tag){
    console.log("you click" + tag);
    this.props.navigator.push({
      component: SubPointsView,
      title: this.props.name,
      passProps: {"tag": this.props.tag}
    })
  },

  render(){
    var width = Math.floor(Util.size.width/3);
    console.log("heie0");
    return(
      <View
        style={{  width: width, height: 70, marginTop: 15, marginBottom: 15}}
        >
        <TouchableOpacity
          style={{alignItems:'center'}}

           onPress={() => this._subjectOnpress(this.props.tag)}
           >
          <Image source={this.props.icon} />

        </TouchableOpacity>

        <Text style={{textAlign:'center', paddingTop: 5, color: this.props.color}}>
            {this.props.name}
        </Text>
      </View>
    );
  }
});

module.exports = SubjectionView;
