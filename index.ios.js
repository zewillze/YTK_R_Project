/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Helper from './util/helper';
import styles from './util/styles';
import {pics} from './views/practiceView';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

import Practice from './views/practiceView';
import Discover from './views/discover';

//practice View
//paper View
//discover View
//myprofile View



var YTK_R_Project = React.createClass({



  getInitialState: function() {
     return {
       selectedTab: 'practice',
     };
   },
  _onPressTab: function(value){

     this.setState({
       selectedTab: value,
     });
   },
   _onPressItem: function(){
     console.log("jajajaj");
   },


  render() {

    var rightItem = {itemIcon: require('image!SwitchNightMode_36x20_'),itemOnpress: this._onPressItem};
    var disRightItem = {itemTitle:'Test',itemOnpress: this._onPressItem};
    console.log(pics);
    return (
      <TabBarIOS>

        <TabBarIOS.Item
          title = "练习"
          icon = {require('image!TabBarIconPracticeNormal_20x20_')}
          selectedIcon = {require('image!TabBarIconPracticeSelected_20x20_')}
          renderAsOriginal
          selected = {this.state.selectedTab === 'practice'}
          onPress = {() => {
            this.setState({selectedTab: 'practice'});
          }}
        >

        {Helper._setNavigator(Practice, "离高考还有0天", null, rightItem)}

        </TabBarIOS.Item>



       <TabBarIOS.Item
                title = "试卷"
                icon = {require('image!TabBarIconPaperNormal_20x20_')}
                selectedIcon = {require('image!TabBarIconPaperSelected_20x20_')}
                renderAsOriginal
                selected = {this.state.selectedTab === 'paper'}
                onPress = {() => {
                  this.setState({selectedTab: 'paper'});
                }}
              >
              <Practice />
       </TabBarIOS.Item>

       <TabBarIOS.Item
                     title = "发现"
                     icon = {require('image!TabBarIconDiscoveryNormal_20x20_')}
                     selectedIcon = {require('image!TabBarIconDiscoverySelected_20x20_')}
                     renderAsOriginal
                     selected = {this.state.selectedTab === 'discover'}
                     onPress = {() => {
                       this.setState({selectedTab: 'discover'});
                     }}
                   >

                   {Helper._setNavigator(Discover, "发现", null, disRightItem)}
       </TabBarIOS.Item>

       <TabBarIOS.Item
                       title = "我"
                       icon = {require('image!TabBarIconMiscNormal_20x20_')}
                       selectedIcon = {require('image!TabBarIconMiscSelected_20x20_')}
                       renderAsOriginal
                       selected = {this.state.selectedTab === 'misc'}
                       onPress = {() => {
                         this.setState({selectedTab: 'misc'});
                       }}
                     >
                     <Practice />
       </TabBarIOS.Item>


      </TabBarIOS>
    );
  }

});

AppRegistry.registerComponent('YTK_R_Project', () => YTK_R_Project);
