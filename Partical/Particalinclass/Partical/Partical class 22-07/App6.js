import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
    single=()=>{
        alert("Hello welcom to React Native")
    }
    two=()=>{
        Alert.alert("Welcome ", "React Native",
        [
            {text:"yes", onPress:()=>console.log("Yess Pressed")},
            {text:"no", onPress:()=>console.log("No Pressed"),style:"cancle"},
        ],
        {cancelable:false}
        );
    }
  render() {
    return (
      <View style={style.container}>
        <Pressable style={style.button} onPress={this.single}>
            <Text style={{color:"black"}}>Single option Alert !!</Text>
            </Pressable>
            <Pressable style={style.button}onPress={this.two}>
                <Text style={{color:"black"}}>Two Option Alert !!</Text>
            </Pressable>
      </View>
    );
  }
}
const style=StyleSheet.create({
    button:{
        height:50,
        width:50,
        margin:150,
    }
})