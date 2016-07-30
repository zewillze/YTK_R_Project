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
    console.log("you click" + tag);
  },
  render(){
    var width = Math.floor(Util.size.width/3);

    return(
      <View
        style={{  width: width, height: 70, marginTop: 15, marginBottom: 15}}
        >
        <TouchableHighlight
          style={{alignItems:'center'}}
           underlayColor='#fff'
           onPress={() => this._subjectOnpress(this.props.tag)}
           >
          <Image source={Util.subObj[this.props.tag].icon} />
        </TouchableHighlight>

        <Text style={{textAlign:'center', paddingTop: 5}}>
            {Util.subObj[this.props.tag].name}
        </Text>
      </View>
    );
  }
});

module.exports = SubjectionView;
