/**
 * Sample React Native App
 * alert alert
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
   View,
   StyleSheet
 } from 'react-native';
 
 const App=()=>{
   return (
    <View style={styles.container}>
        <Text style={styles.mytext}>HelloWelcome to react-native </Text>
    </View>
    );
   };
   const styles=StyleSheet.create({
        container:{
            flex:1,
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        },
        mytext:{
            fontSize:25,
            color:"red",
        },
   });
 export default App;
 