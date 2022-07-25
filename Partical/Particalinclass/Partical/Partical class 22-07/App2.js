import React from 'react'
import { View } from 'react-native'
import Props_Example from './Props_Example'

export default class App extends React.Component {
  render() {
    return (
        <View>
            <Props_Example firstname="Darshan" language="React-native"></Props_Example>
        </View>
    )
  }
}
