'use strict';
import Dimensions from 'Dimensions';
import React from 'react'
import {
  PixelRatio,
  View
}from 'react-native';

var Util = {
  userName: "jerryze",
  //单位像素
  pixel: 1 / PixelRatio.get(),

  urlPreix: "http:/\/127.0.0.1:5000",

  subObj: [
    {
      name:  "语文",
      lightIcon: require('image!HomeSubjectIcon1_70x70_'),
      nightIcon: require('image!HomeSubjectIcon1-night_70x70_')
    },
    {
      name:  "数学",
      lightIcon: require('image!HomeSubjectIcon2_70x70_'),
      nightIcon: require('image!HomeSubjectIcon2-night_70x70_')
    },
    {
      name:  "英语",
      lightIcon: require('image!HomeSubjectIcon3_70x70_'),
      nightIcon: require('image!HomeSubjectIcon3-night_70x70_')
    },
    {
      name:  "物理",
      lightIcon: require('image!HomeSubjectIcon4_70x70_'),
      nightIcon: require('image!HomeSubjectIcon4-night_70x70_'),
    },
    {
      name:  "化学",
      lightIcon: require('image!HomeSubjectIcon5_70x70_'),
      nightIcon: require('image!HomeSubjectIcon5-night_70x70_'),
    },
    {
      name:  "生物",
      lightIcon: require('image!HomeSubjectIcon6_70x70_'),
      nightIcon: require('image!HomeSubjectIcon6-night_70x70_'),
    },
    {
      name:  "历史",
      lightIcon:  require('image!HomeSubjectIcon7_70x70_'),
      nightIcon: require('image!HomeSubjectIcon7-night_70x70_'),
    },
    {
      name:  "地理",
      lightIcon:  require('image!HomeSubjectIcon8_70x70_'),
      nightIcon: require('image!HomeSubjectIcon8-night_70x70_'),
    },
    {
      name:  "政治",
      lightIcon:  require('image!HomeSubjectIcon9_70x70_'),
      nightIcon: require('image!HomeSubjectIcon9-night_70x70_'),
    },
    {
      name:  "更多",
      lightIcon:  require('image!HomeSubjectIcon10_70x70_'),
      nightIcon: require('image!HomeSubjectIcon10-night_70x70_'),
    },
  ],



  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  oneThirdWidth: Math.floor(Dimensions.get('window').width/3),
  borderline: (<View style={{paddingTop: 0,borderTopWidth: 1 / PixelRatio.get(), borderStyle:'solid',borderColor:'#c3c3c3'}} />),
};
module.exports = Util;
