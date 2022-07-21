import React from 'react'
import {StyleSheet, SafeAreaView, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={style.container}>
            <Text>
                That was the react SafeAreaView for safe area boundaries
            </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
});