import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string
}

const Chip: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.chip}>
      <Text>
        { title }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "baseline",
    backgroundColor: '#ddd',
    marginRight: 3,
    marginBottom: 3
  }
})

export default Chip