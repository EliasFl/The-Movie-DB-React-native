import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, ImageBackground } from 'react-native'
import { Text } from "react-native-elements";
import movieApi from "../apis/movieApi"
import Rating from '../components/Rating';
import Chip from '../components/Chip';
import TimeLapse from '../components/TimeLapse';
import { SharedElement } from 'react-navigation-shared-element';

const MovieDetail = ({ route }: { route: any }) => {
  const movieId: number = route.params.movieId
  const [movieDetail, setMovieDetail] = useState({})

  useEffect(() => {
    fetchMovieDetails()
  }, [])

  const fetchMovieDetails = async () => {
    const response = await movieApi(`movie/${movieId}`)
    setMovieDetail(response.data)
  }

  return (
    <View>
      <ImageBackground
        style={{ ...styles.backdropImage }}
        source={{ uri: `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}` }}>
        <View style={styles.overlay}>
          <SharedElement id={`item.${movieId}.photo`}>
            <Image
              resizeMethod="scale"
              resizeMode="cover"
              style={styles.posterImage}
              source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}` }}
            />
          </SharedElement>
          <View style={styles.movieInfoContainer}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            <Text style={{color: '#fff', marginBottom: 8}}>
              Release date: {new Date(movieDetail.release_date).toLocaleDateString()}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: "baseline", marginBottom: 8 }}>
              <Rating
                rating={movieDetail.vote_average}
                textStyle={styles.movieInfoText}
                starSize={24}
              />
              <TimeLapse
                runtime={movieDetail.runtime}
                clockSize={24}
                textStyle={styles.movieInfoText}
              />
            </View>
            <View style={styles.chipsContainer}>
              {
                movieDetail.genres ? (
                  movieDetail.genres.map(genre => {
                    return <Chip title={genre.name} key={genre.id} />
                  })
                ) : null
              }
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.overviewInfoContainer}>
        <Text style={styles.overviewTitle} h4>Overview</Text>
        <Text>{ movieDetail.overview }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backdropImage: {
    height: 400,
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  posterImage: {
    marginLeft: 8,
    height: 250,
    width: 150,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 20,
  },
  movieInfoContainer: {
    marginHorizontal: 8,
    flex: 1
  },
  movieInfoText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16
  },
  movieTitle: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: '#fff',
    flexWrap: 'wrap',
    marginBottom: 8
  },
  chipsContainer: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  overviewInfoContainer: {
    marginTop: 8,
    marginHorizontal: 8
  },
  overviewTitle: {
    marginBottom: 8
  }
})

export default MovieDetail