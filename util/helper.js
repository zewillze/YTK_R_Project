'use strict';


import React, { Component } from 'react';
import styles from './styles';
import Practice from '../views/practiceView';

import {
  NavigatorIOS,
} from 'react-native';

var Helper = {

  /*
    (ItemObj)leftItem: {itemTitle: string, itemIcon:require('') itemOnpress: function}
  */
  _setNavigator: function(component, title, leftItem, rightItem, passDatas) {


    return <NavigatorIOS
        style={styles.navigator}
        barTintColor= '#0085ff'
        barTitleColor='#fff'
        titleTextColor='#fff'
        tintColor='#fff'
        initialRoute={
          {
            component: component,
            title: title,
            rightButtonTitle:rightItem === null ? null:rightItem.itemTitle ,
            onRightButtonPress: rightItem === null ? null:rightItem.itemOnpress,
            leftButtonTitle:leftItem === null ? null:leftItem.itemTitle,
            onLeftButtonPress: leftItem == null ? null : leftItem.itemOnpress,
            rightButtonIcon: rightItem === null? null: rightItem.itemIcon,
            leftButtonIcon: leftItem === null? null: leftItem.itemIcon,
          }
        }
    />;
  },


};



module.exports = Helper;
