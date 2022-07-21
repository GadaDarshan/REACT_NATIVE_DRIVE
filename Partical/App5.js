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
 
 const App=()=> {
   return (
   <View style={{flex:1,backgroundColor:"blue"}}>
    <View style={{flex:2,backgroundColor:"purple"}} />
    <View style={{flex:3,backgroundColor:"red"}} />
   </View>
   );
   };
 export default App;
 