import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { timeConvert } from '../utils'

interface Props {
  runtime: number,
  clockSize?: number,
  textStyle?: object,
  clockColor?: string
}

const TimeLapse: React.FC<Props> = ({ runtime, clockSize = 19, textStyle, clockColor = "lightblue"}) => {
  return (
    <View style={{ ...styles.container }}>
      <MaterialIcons name="access-time" size={clockSize} color={clockColor} />
      <Text 
        style={{ ...styles.text, ...textStyle }}
      >
          {timeConvert(runtime)}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 16
  },
  text: {
    marginLeft: 6
  }
})

export default TimeLapse