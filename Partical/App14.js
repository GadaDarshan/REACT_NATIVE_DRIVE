import React from 'react'
import { View } from 'react-native'
import Login from './src/pages/Login'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Login>
        </Login>
      </View>
    )
  }
}
