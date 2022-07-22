import React from 'react'
import {Text, Button, View,  } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      num1:1,
      count:0,
      mmm:0,
    }
  }
  cal=()=>{
    
    this.setState(
      {
        count : this.state.count + 1
      }
    )
    console.log("this");
  }
  unc=()=>{
    this.setState(
        {
            count : this.state.count - 1
        }
    )
    console.log("-")
  }
  render() {
    return (
    // <View>
    //   <Button title='+' onPress={this.cal}></Button>
    //   <Button  title='-' onPress={this.unc}></Button>
    //   <Text>You clicked me {this.state.count}</Text>
    // </View>
    <View>
      <Text>
        you clicked me {this.state.count}
      </Text>
      <Button title='+' onPress={this.cal}></Button>
      <Button title='-' onPress={this.unc}></Button>
    </View>
    );
  }
}
