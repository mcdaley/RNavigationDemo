//-----------------------------------------------------------------------------
// src/screens/Details/Details.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Icon name='ios-flash' size={48} color='orange' />
      </View>
    )
  }
}

// Export the DetailsScreen
export default DetailsScreen
