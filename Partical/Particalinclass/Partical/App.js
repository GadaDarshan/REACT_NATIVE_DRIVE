import React from 'react'
import {Button, View, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         fontSize:24,
    //     }
    // }
    //     setfont1=()=>{
    //         this.setState({fontSize: +1});
    //     }
    //     setfont2=()=>{
    //         this.setState({fontSize: -1});
    //     }
   render() {
    const [fontSize, setFontSize] = useState(14);
       

        return (
            <View>
          <p style={{fontSize: `${fontSize}px`}}>
             My text
          </p>
          <button onChange={() => setFontSize(fontSize + 1)}>More</button>
          <button onChange={() => setFontSize(fontSize - 1)}>Less</button>
          </View>
        );
  }
}
const styles = StyleSheet.create({
    container :{
        justifyContent:"center",
        flex:1,
        margin:10,
    }
});
