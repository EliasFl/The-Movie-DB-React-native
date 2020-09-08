import React, { memo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Image } from "react-native-elements"
import Rating from './Rating';
import { useNavigation } from "@react-navigation/native"
import { SharedElement } from 'react-navigation-shared-element';

interface Props {
  data: any
}

const MovieItem: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('movieDetail', {movieId: data.id})}>
        <SharedElement id={`item.${data.id}.photo`}>
          <Image
            resizeMethod="scale"
            resizeMode="cover"
            source={{uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`}} 
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
        </SharedElement>
        <Text style={styles.title}>{ data.title }</Text>
        <Rating rating={data.vote_average} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "baseline",
    padding: 8,
  },
  image: {
    width: 150,
    height: 250,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 20
  },
  title: {
    fontWeight: "bold",
    marginTop: 12,
    width: 150
  },
})

export default memo(MovieItem)