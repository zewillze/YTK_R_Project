'use strict';

import React, { Component } from 'react';
import Helper from './util/helper';
import styles from './util/styles';



import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  NavigatorIOS,
  PushNotificationIOS,
  NativeModules
} from 'react-native';

import Practice from './views/practiceView';
import Discover from './views/discover';
import PaperView from './views/paperView';
import Myprofile from './views/myprofile';


//practice View
//paper View
//discover View
//myprofile View


var YTK_R_Project = React.createClass({


  getInitialState: function() {


     return {
       selectedTab: 'practice',
       selectedTheme: 'light'
     };
   },
  _onPressTab: function(value){

     this.setState({
       selectedTab: value,
     });
   },
   _changeTheme: function(){

     var NotificationManager = NativeModules.NotificationManager;
     NotificationManager.postNotification("test", {"obj": "obj"});

     var theme = this.state.selectedTheme === 'light'? 'night': 'light';
     this.setState({
       selectedTheme: theme
     });

     Helper._setTheme(theme);

   },


  render() {

    var rightItem = {itemIcon: require('image!SwitchNightMode_36x20_'),itemOnpress: this._changeTheme};

    var ic = this.state.selectedTheme === 'light'? require('image!TabBarIconPracticeNormal_20x20_') :require('./resources/TabBarIconPracticeNormal-night_20x20_@2x.png');
    var ics = this.state.selectedTheme === 'light'? require('image!TabBarIconPracticeSelected_20x20_'): require('./resources/TabBarIconPracticeSelected-night_20x20_@2x.png');
    return (
      <TabBarIOS>


        <TabBarIOS.Item
          title = "练习"
          icon = {ic}
          selectedIcon = {ics}
          renderAsOriginal
          selected = {this.state.selectedTab === 'practice'}
          onPress = {() => {
            this.setState({selectedTab: 'practice'});
          }}
        >

        {Helper._setNavigator(Practice, "离高考还有0天", null, rightItem, "i 'm pass data'")}

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
              {Helper._setNavigator(PaperView, "试卷", null, null)}


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

                   {Helper._setNavigator(Discover, "发现", null, null)}
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
                     {Helper._setNavigator(Myprofile, "我", null, null)}
       </TabBarIOS.Item>


      </TabBarIOS>
    );
  }

});

AppRegistry.registerComponent('YTK_R_Project', () => YTK_R_Project);
