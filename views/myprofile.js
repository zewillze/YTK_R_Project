'use strict'
import React, { Component } from 'react';
import TableView from 'react-native-tableview';
import Util from '../util/util';
import Helper from '../util/helper';
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;
import CommonCell from './commoncell';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

const cellDatas = [
  [{
      "icon": require('../resources/MiscDefaultAvatar_55x55_@2x.png'),
      title: "jerry",
      isAvatarCell: true,
  }],

  [
    {
        "icon": require('../resources/MiscDropDownErrorExerciseIcon_16x16_@2x.png'),
        title: "错题、收藏、笔记",
        hasBottomLine: true
    },
    {
        "icon": require('../resources/MiscMyHistoryExerciseIcon_16x16_@2x.png'),
        title: "练习历史",
        hasBottomLine: true
    },
    {
        "icon": require('../resources/MiscExerciseStatisticsIcon_16x16_@2x.png'),
        title: "做题统计",
        subMessage: "今天做题0道",
        hasBottomLine: false
    }

  ],

  [
    {
      "icon": require('../resources/DiscoverySearchIcon_16x16_@2x.png'),
      title: "我的消息",
      hasBadge: true,
      hasBottomLine: true
    },
    {
        "icon": require('../resources/MiscPostCardIcon_16x16_@2x.png'),
        title: "我的卡卷",
        hasBottomLine: true,
    },
    {
        "icon": require('../resources/MiscMyOrderIcon_13x16_@2x.png'),
        title: "我的订单",
    }
  ],

  [
    {
        "icon": require('../resources/MiscSettingIcon_16x16_@2x.png'),
        title: "设置",
    },
  ],

];

class Myprofile extends Component {

    render(){

      var sections = [];
      for (var i = 0; i < cellDatas.length; i++) {
        var cellContents = cellDatas[i];
        var cells = [];
        for (var j = 0; j < cellContents.length; j++) {
          var ctx = cellContents[j];
          cells[j] = (<Cell style={{backgroundColor: 'white'}} key={'section'+ i + 'cell'+ 'j'}><CommonCell title={ctx.title} icon={ctx.icon} hasBadge={ctx.hasBadge} subMessage={ctx.subMessage} isAvatarCell={ctx.isAvatarCell} hasBottomLine={ctx.hasBottomLine}/></Cell>);
        }
        sections.push(<Section key={i} headerHeight={0} footerHeight={5}> {cells} </Section>);
      }
       console.log(sections.length);
      return (
        <View style={{backgroundColor: '#e8e8e8', flex: 1,marginTop: 64}}>
        <TableView
          style={{backgroundColor: '#e8e8e8', flex: 1, marginTop: 0}}
          tableViewStyle={TableView.Consts.Style.Plain}
          contentInset={ {top: 5, left: 0, bottom: 0, right: 0}}
          separatorStyle={0}
        >

          {sections}
        </TableView>
        </View>


      );
    }
}
module.exports = Myprofile;
