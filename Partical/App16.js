import React from 'react'
import { Image, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('./Image/pg.jpeg')} style={{width:150, height:150}} />
      </View>
    )
  }
}
