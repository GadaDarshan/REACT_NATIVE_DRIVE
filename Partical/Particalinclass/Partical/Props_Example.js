import React from 'react'
import { View, Text } from 'react-native';

export default class Props_Example extends React.Component {
  render() {
    return (
            <View>
                <Text>Hello {this.props.firstname}</Text>
                <Text>welocme {this.props.language}</Text>
            </View>
    )
  }
}
