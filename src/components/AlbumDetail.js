import React from 'react'
import { Text } from 'react-native'
import Card from './Card'

export default props => (
  <Card>
    <Text> {props.album.title} </Text>
  </Card>
)
