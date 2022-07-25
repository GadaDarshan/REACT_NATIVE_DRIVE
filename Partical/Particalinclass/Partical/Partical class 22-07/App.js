import React from 'react'
import {Text, Button, Modal, StyleSheet, View } from 'react-native'

export default class App extends React.Component {
    constructor()
    {
        super()
        this.state={
            status:false
        }
    }
  render() {
    return (
      <View style={style.container}>
        <Modal animationType={"slide"} visible={this.state.status} transparent={false}>
            <View style={style.modal}>
                <Text style={style.text}>Modal Open</Text>
                <Button title='Click to colse modal' onPress={() =>this.setState({status:false})}></Button>
            </View>
        </Modal>
        <Button title='Click to opn modal' onPress={()=>{this.setState({status:true})}}></Button>
      </View>
    );
  }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ecf0f1",
        marginTop:30,
    },
    modal:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#8e24aa",
        padding:100,
    },
    text:{
        color:"white",
        marginTop:10,
        fontSize:30,
    }
});