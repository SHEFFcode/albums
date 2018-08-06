import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
}

export default ({ album }) => {
  const { thumbnail_image, title, artist } = album
  const { headerContentStyle, thumbnailStyle } = styles

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View>
          <Text> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>
    </Card>
  )
}
