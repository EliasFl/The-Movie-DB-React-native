import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  rating: number,
  textStyle?: any,
  starSize?: number
}

const Rating: React.FC<Props> = ({ rating, textStyle, starSize = 19 }) => {
  return (
    <View style={styles.rating}>
      <MaterialIcons name="star" size={starSize} color="sandybrown" style={styles.ratingStar} />
    <Text style={textStyle}>{ rating }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingStar: {
    marginRight: 4
  }
})

export default Rating