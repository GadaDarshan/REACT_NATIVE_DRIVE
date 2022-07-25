import React from 'react'
import { Alert, Pressable, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

export default class App extends React.Component {
    myonpress(){
        Alert.alert("Hello welcome to react-native")
    }
  render() {
    return (
      <View>
        {/* <TouchableNativeFeedback onPress={this.myonpress} background={TouchableNativeFeedback.SelectableBackground()}>
            <View>
                <Text style={{color:"black"}}>Only for android</Text>
            </View>
        </TouchableNativeFeedback>
             {/* <TouchableOpacity  onPress={this.myonpress}> */}
                {/* <Text> TouchableOpacity</Text>
                </TouchableOpacity> */} 
                {/* <TouchableWithoutFeedback>
                  <View>
                    <Text>
                      Lable
                    </Text>
                  </View>
                </TouchableWithoutFeedback> */}
                <Pressable style={style.button}onPress={this.myonpress}>
                  <Text style={{color:"black"}}>Click Me!</Text>
                </Pressable>
      </View>
    ); 
  }
}
const style=StyleSheet.create({
  button:{
    width:50,
    height:20,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:170,
    marginTop:170,
  },
})