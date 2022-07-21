/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
   View,
 } from 'react-native';
 
 const App=()=>{
   return (
   <View style={{flex:1,flexDirection:"column"}}>
    <View style={{width:250,height:250,backgroundColor:"blue",alignItems:"center"}}></View>
    <View style={{width:250,height:250,backgroundColor:"yellow",alignItems:"center"}}></View>
   </View>
   );
   };
 export default App;
 