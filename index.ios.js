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
  NativeModules,
  AsyncStorage
} from 'react-native';

import Practice from './views/practice/practiceView';
import Discover from './views/discover/discover';
import PaperView from './views/paper/paperView';
import Myprofile from './views/misc/myprofile';


//practice View
//paper View
//discover View
//myprofile View

const TabbarIcons = {
  lightNormal: [
    require('image!TabBarIconPracticeNormal_20x20_'),
    require('image!TabBarIconPaperNormal_20x20_'),
    require('image!TabBarIconDiscoveryNormal_20x20_'),
    require('image!TabBarIconMiscNormal_20x20_'),
  ],
  lightSelect: [
    require('image!TabBarIconPracticeSelected_20x20_'),
    require('image!TabBarIconPaperSelected_20x20_'),
    require('image!TabBarIconDiscoverySelected_20x20_'),
    require('image!TabBarIconMiscSelected_20x20_'),
  ],
  nightNormal: [
    require('image!TabBarIconPracticeNormal-night_20x20_'),
    require('image!TabBarIconPaperNormal-night_20x20_'),
    require('image!TabBarIconDiscoveryNormal-night_20x20_'),
    require('image!TabBarIconMiscNormal-night_20x20_'),
  ],
  nightSelect: [
    require('image!TabBarIconPracticeSelected-night_20x20_'),
    require('image!TabBarIconPaperSelected-night_20x20_'),
    require('image!TabBarIconDiscoverySelected-night_20x20_'),
    require('image!TabBarIconMiscSelected-night_20x20_'),
  ],
};

var YTK_R_Project = React.createClass({


  getInitialState: function() {

     return {
       selectedTab: 'practice',
       selectedTheme: ''
     };
   },

   componentWillMount:function(){
     var thiz = this;
     Helper._getTheme(function(value){
       thiz.setState({
         selectedTheme: value
       });
     });
   },
  _onPressTab: function(value){

     this.setState({
       selectedTab: value,
     });
   },

   _changeTheme: function(){


     var theme = this.state.selectedTheme === 'light'? 'night': 'light';
     var NotificationManager = NativeModules.NotificationManager;
     NotificationManager.postNotification("CHANGE_THEME", {"currentTheme": theme});
     this.setState({
       selectedTheme: theme
     });

     Helper._setTheme(theme);

   },


  render() {
    console.log("initialTheme :" + this.state.selectedTheme);
    var rightItem = {itemIcon: require('image!SwitchNightMode_36x20_'),itemOnpress: this._changeTheme};
    var isNight = this.state.selectedTheme === 'night';


    var icons = !isNight ? TabbarIcons.lightNormal : TabbarIcons.nightNormal;
    var selectedIcons = !isNight ? TabbarIcons.lightSelect: TabbarIcons.nightSelect;

    var btcolor = !isNight? null : '#1c232a';
    return (
      <TabBarIOS barTintColor={btcolor}>


        <TabBarIOS.Item
          title = "练习"
          icon = {icons[0]}
          selectedIcon = {selectedIcons[0]}
          renderAsOriginal
          selected = {this.state.selectedTab === 'practice'}
          onPress = {() => {
            this.setState({selectedTab: 'practice'});
          }}
        >

        {Helper._setNavigator(isNight, Practice, "离高考还有0天", null, rightItem, "i 'm pass data'")}

        </TabBarIOS.Item>



       <TabBarIOS.Item
                title = "试卷"
                icon = {icons[1]}
                selectedIcon = {selectedIcons[1]}
                renderAsOriginal={true}
                selected = {this.state.selectedTab === 'paper'}
                onPress = {() => {
                  this.setState({selectedTab: 'paper'});
                }}
              >
              {Helper._setNavigator(isNight, PaperView, "试卷", null, null)}


       </TabBarIOS.Item>

       <TabBarIOS.Item
                     title = "发现"
                     icon = {icons[2]}
                     selectedIcon = {selectedIcons[2]}
                     renderAsOriginal
                     selected = {this.state.selectedTab === 'discover'}
                     onPress = {() => {
                       this.setState({selectedTab: 'discover'});
                     }}
                   >

                   {Helper._setNavigator(isNight, Discover, "发现", null, null)}
       </TabBarIOS.Item>

       <TabBarIOS.Item
                       title = "我"
                       icon = {icons[3]}
                       selectedIcon = {selectedIcons[3]}
                       renderAsOriginal
                       selected = {this.state.selectedTab === 'misc'}
                       onPress = {() => {
                         this.setState({selectedTab: 'misc'});
                       }}
                     >
                     {Helper._setNavigator(isNight, Myprofile, "我", null, null)}
       </TabBarIOS.Item>


      </TabBarIOS>
    );
  }

});

AppRegistry.registerComponent('YTK_R_Project', () => YTK_R_Project);
