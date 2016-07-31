'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';


class Discover extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row1', 'row2']),
        };
      };

      _renderSection(){
        return (
          <View style={{backgroundColor: '#c3c3c3'}}>
            <Text>
              Section
            </Text>
          </View>
        );
      };
    render(){
      return (
        <ListView
       dataSource={this.state.dataSource}
       enableEmptySections={false}
       renderSectionHeader={this._renderSection}
       renderRow={(rowData) => <Text>{rowData}</Text>}
        />

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
