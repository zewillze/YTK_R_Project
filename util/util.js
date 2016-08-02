'use strict';
import Dimensions from 'Dimensions';
import React from 'react'
import {
  PixelRatio
}from 'react-native';

var Util = {
  userName: "jerryze",
  //单位像素
  pixel: 1 / PixelRatio.get(),

  urlPreix: "http:/\/127.0.0.1:5000",

  subObj: [
    {
      name:  "语文",
      icon:  require('image!HomeSubjectIcon1_70x70_'),
    },
    {
      name:  "数学",
      icon:  require('image!HomeSubjectIcon2_70x70_'),
    },
    {
      name:  "英语",
      icon:  require('image!HomeSubjectIcon3_70x70_'),
    },
    {
      name:  "物理",
      icon:  require('image!HomeSubjectIcon4_70x70_'),
    },
    {
      name:  "化学",
      icon:  require('image!HomeSubjectIcon5_70x70_'),
    },
    {
      name:  "生物",
      icon:  require('image!HomeSubjectIcon6_70x70_'),
    },
    {
      name:  "历史",
      icon:  require('image!HomeSubjectIcon7_70x70_'),
    },
    {
      name:  "地理",
      icon:  require('image!HomeSubjectIcon8_70x70_'),
    },
    {
      name:  "政治",
      icon:  require('image!HomeSubjectIcon9_70x70_'),
    },
    {
      name:  "更多",
      icon:  require('image!HomeSubjectIcon10_70x70_'),
    },
  ],



  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  oneThirdWidth: Math.floor(Dimensions.get('window').width/3),
};
module.exports = Util;
