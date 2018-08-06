import React, { Component } from 'react'
import { Text, View } from 'react-native'

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
}

export default props => {
  return <View style={styles.containerStyle}>{props.children}</View>
}
