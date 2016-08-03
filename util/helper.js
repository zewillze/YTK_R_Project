'use strict';


import React, { Component } from 'react';
import styles from './styles';
import Util from './util';


import {
  NavigatorIOS,
  AsyncStorage
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
        renderScene={component}
        initialRoute={
          {
            component: component,
            title: title,
            rightButtonTitle: rightItem === null ? null: rightItem.itemTitle,
            onRightButtonPress: rightItem === null ? null:rightItem.itemOnpress,
            leftButtonTitle: leftItem === null ? null:leftItem.itemTitle,
            onLeftButtonPress: leftItem == null ? null : leftItem.itemOnpress,
            rightButtonIcon: rightItem === null? null: rightItem.itemIcon,
            leftButtonIcon: leftItem === null? null: leftItem.itemIcon,
            passProps: {d: passDatas},
          }
        }
    />;
  },

  /*Networking*/
  /*get request*/
  _get: function (url, callback) {
    console.log("get "+ (url));
    console.log("get url " + Util.urlPreix + url);
    fetch(Util.urlPreix+url)
    .then((response) => response.json())
    .then((responseJson) => {
      callback(responseJson);
    }).done();
  },

  /*post request*/
  _post: function (url, parameter, callback) {
      var options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameter)
      };

      fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        callback(responseJson);
      }).done();
  },


  _getTheme: function(callback){

    AsyncStorage.getItem("theme").then((value) => {
      callback(value);
    });
  },

  _setTheme: function(value){
    console.log("setting theme to => " + value);
     AsyncStorage.setItem('theme', value);
   },
};



module.exports = Helper;
