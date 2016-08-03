'use strict'
import React, { Component } from 'react';
import TableView from 'react-native-tableview';
import CommonCell from './commoncell';
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image
} from 'react-native';

const cellDatas = [
  [{
      "icon": require('../resources/DropDownRealPaperNormal_16x16_@2x.png'),
      title: "小猿读报",
      subMessage: "7月30日秒抢秋季系统板"
  }],

  [
    {
        "icon": require('../resources/DiscoveryHomeworkGroupIcon_16x16_@2x.png'),
        title: "作业群",
        hasBottomLine: true
    },
    {
        "icon": require('../resources/DiscoveryLeaderBoardIcon_15x16_@2x.png'),
        title: "排行榜",
    }
  ],

  [{
      "icon": require('../resources/DiscoveryPromotionIcon_14x16_@2x.png'),
      title: "班课商城",
      hasBadge: true,
      subMessage: "7月30日秒抢秋季系统板"
  }],

  [
    {
        "icon": require('../resources/DiscoveryOnlineTutorIcon_16x15_@2x.png'),
        title: "在线辅导",
        hasBottomLine: true,
        subMessage: "猿题库新产品"
    },
    {
        "icon": require('../resources/DiscoverySearchIcon_16x16_@2x.png'),
        title: "拍照搜题",
    }
  ],

];

class Discover extends Component {

    render(){

      var sections = [];
      for (var i = 0; i < cellDatas.length; i++) {
        var cellContents = cellDatas[i];
        var cells = [];
        for (var j = 0; j < cellContents.length; j++) {
          var ctx = cellContents[j];
          cells[j] = (<Cell style={{backgroundColor: 'white'}} key={'section'+ i + 'cell'+ 'j'}><CommonCell title={ctx.title} icon={ctx.icon} isAvatarCell={ctx.isAvatarCell} hasBottomLine={ctx.hasBottomLine} hasBadge={ctx.hasBadge} subMessage={ctx.subMessage}/></Cell>);
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

const styles = StyleSheet.create({
  container:{
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#f13411',
     padding: 10
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#414125',
    justifyContent: 'center'
  },

  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6
  },

});

module.exports = Discover
