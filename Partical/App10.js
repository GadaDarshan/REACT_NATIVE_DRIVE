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
   StyleSheet,
   Button,
   Alert
 } from 'react-native';
 
 const App=()=>{
   return (
    <View style={styles.container}>
 <Button title='click me' onPress={()=>Alert.alert("Welcome to react native app")}></Button>
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
 