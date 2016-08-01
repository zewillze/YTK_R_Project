'use strict'
import React, { Component } from 'react';
import TableView from 'react-native-tableview';
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
        "icon": require('../resources/DropDownRealPaperNormal_16x16_@2x.png'),
        title: "作业群",
        hasBottomLine: true
    },
    {
        "icon": require('../resources/DropDownRealPaperNormal_16x16_@2x.png'),
        title: "排行榜",
    }
  ],

  [{
      "icon": require('../resources/DropDownRealPaperNormal_16x16_@2x.png'),
      title: "班课商城",
      hasBadge: true,
      subMessage: "7月30日秒抢秋季系统板"
  }],

  [
    {
        "icon": require('../resources/DropDownRealPaperNormal_16x16_@2x.png'),
        title: "在线辅导",
        hasBottomLine: true,
        subMessage: "猿题库新产品"
    },
    {
        "icon": require('../resources/DropDownRealPaperNormal_16x16_@2x.png'),
        title: "拍照搜题",
    }
  ],

];


class DiscoverCell extends Component {
  render(){
    console.log("2" + this.props.subMessage);
    var badgeView = this.props.hasBadge ? <Image style={{width:5, height: 5}} source={require('image!messageCountIcon_26x25_')}/> : null;
    var subMessage = this.props.subMessage ? <Text style={{color: 'gray', fontSize: 12, marginRight: 5, flex: 3, textAlign:'right'}}>{this.props.subMessage}</Text> : null;
    return(
      <TouchableHighlight>
        <View  style={{flexDirection: 'row', alignItems: 'center', height: 40,}} >
          <Image style={{ marginLeft: 12, }} source={this.props.icon}/>
          <Text style={{marginLeft: 10, fontSize: 13, color: '#333333', flex: 2}}>
            {this.props.title}
          </Text>
          {badgeView}
          {subMessage}
          <Image style={{marginRight: 10,   }} source={require('../resources/inputViewRightArrow_4x7_@2x.png')}/>

        </View>
      </TouchableHighlight>
    );
  }
}

class Discover extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row1', 'row2']),
        };
      };

    render(){

      var sections = [];
      for (var i = 0; i < cellDatas.length; i++) {
        var cellContents = cellDatas[i];
        var cells = [];
        for (var j = 0; j < cellContents.length; j++) {
          var ctx = cellContents[j];

          cells[j] = (<Cell style={{backgroundColor: 'white'}} key={'section'+ i + 'cell'+ 'j'}><DiscoverCell title={ctx.title} icon={ctx.icon} hasBadge={ctx.hasBadge} subMessage={ctx.subMessage}/></Cell>);

        }
        sections.push(<Section key={i}> {cells} </Section>);
      }
       console.log(sections.length);
      return (
        <ScrollView style={{backgroundColor: '#e8e8e8'}}>
        <TableView
          style={{flex: 1, marginTop: 5}}
        >
          {sections}
        </TableView>
        </ScrollView>
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
