import React from 'react'
import { Text, View } from 'react-native';

export default class Time extends React.Component {
    constructor(){
        super();
        this.state={a:0,b:50};
    
    setInterval(() => {
        this.setState({a:this.state.a+1});
        this.setState({b:this.state.b-1});
    }, 1000);
}


  render() {
    return (
        <View>
            <Text>{"value of a:" + this.state.a}</Text>
            <Text>{"value of b:" + this.state.b}</Text>
        </View>
    );
  }
}
