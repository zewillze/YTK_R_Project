'use strict'
import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import Util from '../util/util';
import Helper from '../util/helper';
import SubjectionView from './SubjectionView';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView,
  Image,
  NativeAppEventEmitter
} from 'react-native';


// class PracticeNavi extends Component {
//   render(){
//     return({
//       Helper._setNavigator(Practice)
//     });
//   }
// }



/* 页面中间部分 （Banner下面）用户名和任务拦*/
class MidPartView extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
        isLogIn: true,
        finishMission: false,
        finishCout: 0,
    };
  };

  _renderMissionView(){
      return this.state.finishMission ? this._renderFinishMissView(): this._renderUnFinishMissView();
  };

  _renderFinishMissView(){
    return <MissionView />;
  };

  _renderUnFinishMissView(){
    return (<View style={[styles.missionViewContainer, {flexDirection: 'column', justifyContent: 'center', alignItems:'center', margin: 25}]}>
        <Image source={require('image!HomePracticeTaskHintNoTask_22x24_')}/>
        <Text style={[{fontSize: 11, marginTop: 5}, styles.lightGray]}>
          今日暂无任务，自己High~
        </Text>
        </View>);
  };


  render(){
    console.log("i am reload");
    return(
        <View >
            <View style={styles.midPart}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.midSmallIcon} source={require('image!MiscDefaultAvatar_55x55_')} />

                <View style={{flex: 2, flexDirection:'row'}}>
                  <Text style={[styles.normalText, styles.darkGrayText]}>{this.state.isLogIn? Util.userName:"null"}</Text>
                  <Text style={[styles.bigText, styles.lightGray, {marginLeft: 5}]}>{this.state.finishCout===0? "今天未练习": "今天已练习题目"+this.state.finishCout+"道"}</Text>
                </View>
              </View>
            </View>


            <View style={styles.midP2Container}>
              <View style={styles.midP2TitleView}>
                <Text style={[styles.normalText, styles.lightGray]}>今日任务</Text>
                <Text style={[styles.normalText, styles.lightGray]}>查看全部</Text>
              </View>
              {this._renderMissionView()}
            </View>
        </View>
    )
  };

}


class MissionView extends Component {
  render(){
    return(
      <View style={[styles.missionViewContainer, {flexDirection:'row', borderWidth: Util.pixel}]}>
        <View style={styles.missionLeftView}>
          <Text
          numberOfLines={1}
          style={styles.normalText}>
              英语易错专项第六期-----情景语法2231313123123123
          </Text>

          <View style={styles.missionInnerRow}>
              <Image style={styles.smallIcon} source={require('image!RecommendLessonDateIcon_12x12_')}/>
              <Text style={[styles.lightGray, styles.smallText, {marginLeft: 5}]}>xx月28日11:00</Text>

              <Image style={[{marginLeft: 5}, styles.smallIcon]} source={require('image!RecommendLessonDateIcon_12x12_')}/>
              <Text style={[{marginLeft: 5}, styles.smallText, styles.lightGray]}>10道小题</Text>
            </View>

            <View style={[{marginBottom: 5},styles.missionInnerRow]}>
              <Image style={[{width: 20, height: 20}]} source={require('image!QuestionSingleChoiceSelected_36x36_')}/>
              <Text style={[styles.darkGray, {fontSize: 12, paddingTop: 5, paddingLeft: 5}]}>每周易错题专练</Text>
            </View>
          </View>

        <View style={{flex:1, backgroundColor: '#8dc5ec', marginBottom: 5, marginRight: 5}}>
        </View>
      </View>

    );
  }
};

/*Main view*/
class Practice extends Component {


  constructor(props, context){
    super(props, context);

    this.state = {
      width: Dimensions.get('window').width,
      datas: [],
      theme: ""
    };

  };

  componentWillMount(){
    console.log("componentWillMount");

    var sub = NativeAppEventEmitter.addListener(
      'test',
      (reminder) => console.log("i am recive " + reminder.obj)
    );

    var weakT = this;
    Helper._getTheme(function(theme){
      console.log("gettt" + theme);
      weakT.setState({
        "theme": theme
      });
    });
    /* fetch banner from server */
    this._fetchBanners();


  };



/*fetch Banner pictures from server */
  _fetchBanners(){
    var weakT = this;
     Helper._get('/homeBanners',
      function(responseJson){
        console.log(responseJson.datas);
        var banners = [];
        for (var i = 0; i < responseJson.datas.length; i++) {
          banners[i] = <Image key={i} style={[styles.img, {width: weakT.state.width}]} source={{uri:Util.urlPreix+responseJson.datas[i]}}/>
        }
        if(banners.length > 0) {
          weakT.setState({"datas": banners});
        }
      }
   )
 };

  _subjectOnpress(tag){
    console.log("tap");
  };


  _renderSubjectionIcon(idx){

    return (
      <SubjectionView
        key={idx}
        tag={idx}
      />
    );
  };

  render(){

    var subs = [];

    for (var i = 0; i < Util.subObj.length; i++) {
      subs[i] = this._renderSubjectionIcon(i);
    }
    console.log("dassss " + this.state.datas);

    return(
          <ScrollView>
            <View style={styles.container} onLayout={this._onLayout}>
              <ScrollView
                automaticallyAdjustContentInsets={false}
                style={styles.scrollView}
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                bounces={false}
              >

                {this.state.datas}

              </ScrollView>
            </View>
            <View style={{backgroundColor: '#fff'}}>
              <MidPartView />

              <View style={[{ flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between', marginBottom: 5}]}>
               {subs}
              </View>

            </View>
        </ScrollView>
    );
  }
};



const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#f8f8f8',
  },
  scrollView: {
    height: 160,
  },
  img:{
    height: 160,
  },

  text: {
    backgroundColor: '#135124',
    fontSize: 18,
  },
    midPart: {
      flexDirection:'row',

      alignItems: 'center',
    },
  midSmallIcon: {

    width: 20,
    height: 20,
    margin: 10,
  },

  midUserName: {
    fontSize: 11,
    color: '#222222',
  },

  midPracticeText: {
    fontSize: 10,
    color: '#343434',
    marginLeft: 5,
  },

  midP2Container: {
    marginTop: 10,
    flexDirection: 'column',
  },
  midP2TitleView:{
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between'
  },
  p2Title:{
    fontSize: 10,
    color: '#222222',
  },

  smallIcon: {
    width: 15,
    height: 15,
  },

  missionViewContainer: {
    marginTop: 6,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingLeft: 13,
    paddingBottom: 8,
    borderWidth: Util.pixel,
    borderColor:'#c3c3c3',
    borderStyle:'solid',
  },
  missionLeftView: {
    flexDirection: 'column',
    flex: 3.5,

    marginRight: 3,
  },
  missionInnerRow: {
    flexDirection: 'row',

     marginTop: 5
  },
  lightGray: {
    color: '#c8c8c8'
  },
  darkGray: {
    color: '#8f959b',
  },
  black: {
    color:'#333333',
  },
  bigText: {
    fontSize: 14,
  },
  normalText: {
    fontSize: 12,
  },
  smallText:{
    fontSize: 11,
  },


});

module.exports = Practice;
