import React from 'react'
import ReactNative, { Text } from 'react-native'
import Header from './src/components/header'

const App = () => {
  return <Header />
}

ReactNative.AppRegistry.registerComponent('albums', () => App)
