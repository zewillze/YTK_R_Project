'use strict'
import React, { Component } from 'react';
import Util from '../util/util';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


var SubjectionView = React.createClass({
  _subjectOnpress:function(tag){
  },
  render(){
    var width = Math.floor(Util.size.width/3);
    return(
      <View style={{  width: width, height: 70, marginTop: 15, marginBottom: 15}}>
        <TouchableHighlight style={{alignItems:'center'}} onpress={this._subjectOnpress(this.props.tag)}>
          <Image source={this.props.subIcon}/>
        </TouchableHighlight>
        <Text style={{textAlign:'center', paddingTop: 5}}>
          {this.props.subName}
        </Text>
      </View>
    );
  }
});

module.exports = SubjectionView;
