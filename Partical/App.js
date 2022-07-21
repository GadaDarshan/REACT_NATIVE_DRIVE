import React from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            firstnamevalue:""
        }
    }
    getvaluefun=()=>{
        const{firstnamevalue}=this.state;
        Alert.alert(firstnamevalue)
    }
  render() {
    return (
      <View style={style.container}>
        <TextInput placeholder='enter name' onChangeText={firstnamevalue=>this.state({firstnamevalue})}></TextInput>
        <Button title='Submit' onPress={this.getvaluefun}></Button>
      </View>
    )
  }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        color:"black"
    },
});