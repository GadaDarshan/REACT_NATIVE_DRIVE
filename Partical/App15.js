import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import Login from './src/pages/Login'


export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle={'dark-Content'} hidden={true}backgroundColor="#0000ff"/>
        <Login></Login>
      </View>
    );
  }
}
 
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"blue",
        
    },
});