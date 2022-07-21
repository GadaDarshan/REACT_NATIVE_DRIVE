import React from 'react'
import {Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    <View style={style.container}>
        <View style={style.inputview}>
            <TextInput style={style.TextInput}placeholder="email"placeholderTextColor={"#003f5c"} />
        </View>
        <View style={style.inputview}>
            <TextInput style={style.TextInput}placeholder="password"placeholderTextColor={"#003f5c"}secureTextEntry={true}/>
            <TouchableOpacity>
                <Text style={style.forget_button}>
                    forget password
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.loginbtn}>
                <Text style={style.logintext}>Login</Text>
                </TouchableOpacity>
        </View>
    </View>
    );
  }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        marginBottom:40,
    },
    inputview:{
        backgroundColor:"#ffc0cb",
        borderRadius:30,
        width:"70%",
        height:45,
        marginBottom:20,
        alignItems:"center",
    },
    TextInput:{
        height:50,
        padding:10,
        flex:1,
        marginLeft:20,
    },
    forget_button:{
        height:30,
        marginBottom:30,
    },
    loginbtn:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#ff1493",
    },
});