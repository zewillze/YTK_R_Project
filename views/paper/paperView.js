'use strict'
import React, { Component } from 'react';
import TableView from 'react-native-tableview';
import Util from '../../util/util';
import Helper from '../../util/helper';
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ListView,
  ScrollView,
  NativeAppEventEmitter,
  Image
} from 'react-native';

class HeaderTitleView extends Component {
  render(){
    var arrowImage = this.props.hasArrow ? <Image source={require('../../resources/inputViewRightArrow_4x7_@2x.png')}/>: null;
    return(
        <View>
          <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', margin: 10}}>
            <Text style={{fontSize: 13}}>
              {this.props.title}
            </Text>
            {arrowImage}
          </View>

          <View style={{marginLeft: 10,marginRight: 10,borderTopWidth: Util.pixel, borderStyle:'solid',borderColor:'#c3c3c3',}} / >
        </View>

    );
  }
};

class NewsPaperHorizalScrollView extends Component {
  _onpreess(){

  };
  _drawContent(tag){

    return (
      <TouchableHighlight key={tag} underlayColor='white' onPress={this._onpreess} style={{padding: 0,margin: 10,}}>
        <View>
          <Image source={require('../../resources/PaperCoverSelectedBackground_91x132_@2x.png')}></Image>
        </View>

      </TouchableHighlight>

    );
  };

  render(){
    var views = [];
    for (var i = 0; i < 20; i++) {
      views[i] = this._drawContent(i);
    }
    console.log(views.length);
    return(
      <ScrollView horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false} >
        {views}
      </ScrollView>
    );
  }
};



const CourseListDatas = {
  title: "高考真题&模拟题(共8157份试卷)",
  courses: [
    {icon: require('../../resources/PaperCourseIconChinese_18x20_@2x.png'), text: "语文"},
    {icon: require('../../resources/PaperCourseIconSMath_20x20_@2x.png'), text: "理数"},
    {icon: require('../../resources/PaperCourseIconLMath_20x20_@2x.png'), text: "文数"},
    {icon: require('../../resources/PaperCourseIconEnglish_16x17_@2x.png'), text: "英语"},
    {icon: require('../../resources/PaperCourseIconSCombination_20x20_@2x.png'), text: "理综"},
    {icon: require('../../resources/PaperCourseIconLCombination_20x20_@2x.png'), text: "文综"},
    {icon: require('../../resources/PaperCourseIconPhysics_18x20_@2x.png'), text: "物理"},
    {icon: require('../../resources/PaperCourseIconChemistry_14x20_@2x.png'), text: "化学"},
    {icon: require('../../resources/PaperCourseIconBiology_20x20_@2x.png'), text: "生物"},
    {icon: require('../../resources/PaperCourseIconHistory_19x20_@2x.png'), text: "历史"},
    {icon: require('../../resources/PaperCourseIconGeography_17x20_@2x.png'), text: "地理"},
    {icon: require('../../resources/PaperCourseIconPolitics_20x19_@2x.png'), text: "政治"},
  ]

};


class CourseListView extends Component {

  _onpreeOn(){

  }
  _drawSubjectionV(obj: obj,tag){
    return (
      <TouchableHighlight key={tag} underlayColor='#c8c8c8'  style={{width: Util.oneThirdWidth, height: Util.oneThirdWidth - 40}} onPress={(this._onpreeOn)}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{ marginRight: 8}} source={obj.icon}/>
          <Text style={{fontSize: 12}}>{obj.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
    render(){
      var datas = this.props.datas;
      var title = datas.title;
      var courses = datas.courses;

      var views = [];
      for (var i = 0; i < courses.length; i++) {
        views[i] = this._drawSubjectionV(courses[i] ,i);
      }
      return(
        <View style={{flex: 1, flexDirection: 'column', marginTop: 10, backgroundColor: bgcolor}}>
          <HeaderTitleView title={title}/>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: bgcolor, alignItems: 'center', marginBottom: Util.pixel}}>
            {views}
          </View>
        </View>

      );
    }
};

var sub = null;
var bgcolor = null;
class PaperView extends Component {

  constructor(props, context){
    super(props, context);


    this.state = {
      currentTheme: ''
    };

  };


  componentWillMount(){
    console.log("PaperView componentWillMount");
    var thiz = this;
    sub = NativeAppEventEmitter.addListener(
      'CHANGE_THEME',
      (reminder) => {
        thiz.setState({"currentTheme": reminder.currentTheme});
      }
    );

    Helper._getTheme(function(theme){
      console.log("paper view "+ theme);
        thiz.setState({"currentTheme": theme});
    });

  };

  componentWillUnmount(){
    sub.remove();
  };

  render(){
    bgcolor = this.state.currentTheme === 'light' ? '#fff': '#1f282f';
    console.log("reload bgcolor" + bgcolor);
    return(
      <ScrollView style={{backgroundColor: '#e8e8e8'}}>
      <View style={{ flexDirection: 'column', backgroundColor:bgcolor}}>
        <HeaderTitleView title="最新试卷" hasArrow={true}/>
        <NewsPaperHorizalScrollView />
      </View>
      <CourseListView datas={CourseListDatas}/>
      </ScrollView>


    );
  }
};

module.exports = PaperView;
