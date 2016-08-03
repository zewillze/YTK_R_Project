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
class CommonCell extends Component {
  render(){
/*  a cell kind of avatar in Myprofile view*/
    var padding = this.props.isAvatarCell? 10: 12;
    console.log("height: "+ padding);
    console.log("2" + this.props.subMessage);
    var badgeView = this.props.hasBadge ? <Image style={{width:5, height: 5, marginLeft: 5}} source={require('image!messageCountIcon_26x25_')}/> : null;
    var subMessage = this.props.subMessage ? <Text style={{color: 'gray', fontSize: 12, marginRight: 5, flex: 3, textAlign:'right'}}>{this.props.subMessage}</Text> : null;
    var bottomLine = this.props.hasBottomLine ? Util.borderline : null;
    return(
      <TouchableHighlight style={{}}>
        <View  style={{flexDirection: 'column',  marginLeft: 12,marginRight: 10,  }} >
          <View style={{flexDirection: 'row',alignItems:'center',marginTop: padding, marginBottom: padding,}}>
            <Image  source={this.props.icon}/>

            <View style={{flex: 1, flexDirection:'row', marginLeft: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 13, color: '#333333', paddingLeft: 0}}>
                {this.props.title}

              </Text>
              {badgeView}
            </View>

            {subMessage}
            <Image source={require('../resources/inputViewRightArrow_4x7_@2x.png')}/>
          </View>

          {bottomLine}
        </View>

      </TouchableHighlight>
    );
  }
}
module.exports = CommonCell;
