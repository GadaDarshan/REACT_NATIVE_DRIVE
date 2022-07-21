import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class login extends React.Component {
  render() {
    return (
        <View style={style.container}>
            <Text style={style.mytext}>Login Page</Text>
        </View>
    )
  }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink",
    },
    mytext:{
        fontSize:35,
        color:"white",
    },
});