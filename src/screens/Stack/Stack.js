//-----------------------------------------------------------------------------
// src/screens/Stack.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'

import styles                 from './styles'

class StackScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Stacked Screen</Text>
        <Button
          title   = 'Go to List'
          onPress = { () => this.props.navigation.navigate('List') }
        />
      </View>
    )
  }
}

export default StackScreen