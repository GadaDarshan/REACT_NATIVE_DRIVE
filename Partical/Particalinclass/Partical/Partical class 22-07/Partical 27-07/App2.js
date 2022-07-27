import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

export default class App extends React.Component {
    constructor(){
        super()
        this.state={
            status:false
        }
    }
    check=(value)=>{
        this.setState({status:value})
    }
  render() {
    return (
    <View style={styles.container} backgroundColor={this.state.status ? "purple":"blue"}>
        <Text style={styles.text}>{this.state.status ?'switch off' : 'switch on'}</Text>
        <Switch style={{marginTop:60}}trackColor={{false:"yellow",true:"grey"}}
        thumbColor={this.state.status ? "purple" : "blue"}onValueChange={this.check}style={{transform:[{scaleX:2},{scaleY:2}]}}value={this.state.status}></Switch>
    </View>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"#ecf0f1",
        marginTop:30,
    },
    text:{
        fontSize:30,
        margin:20,
    },
});