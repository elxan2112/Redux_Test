import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import Header from './myContent/Header';
import MainView from './myContent/MainView';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
      <Header/>
      <ScrollView>
      <MainView/>
      </ScrollView>
      </View>
    )
  }
}
export default App;