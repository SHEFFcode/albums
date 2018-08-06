import React from 'react'
import ReactNative, { View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  )
}

ReactNative.AppRegistry.registerComponent('albums', () => App)
