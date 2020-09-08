import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import movieApi from "../apis/movieApi";
import MovieItem from '../components/MovieItem';
import { Text } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';

const MovieList = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    fetchTopRatedMovies()
    fetchPopularMovies()
    fetchNowPlayingMovies()
  }, [])

  const fetchTopRatedMovies = async () => {
    const response = await movieApi.get('/movie/top_rated')
    setTopRatedMovies(response.data.results)
  }

  const fetchPopularMovies = async () => {
    const response = await movieApi.get('/movie/popular')
    setPopularMovies(response.data.results)
  }

  const fetchNowPlayingMovies = async () => {
    const response = await movieApi.get('/movie/now_playing')
    setNowPlayingMovies(response.data.results)
  }

  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Top Rated</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={topRatedMovies}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => <MovieItem data={item} />}
      />
      <Text style={styles.sectionTitle}>Popular movies</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularMovies}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => <MovieItem data={item} />}
      />
      <Text style={styles.sectionTitle}>Now in theatres</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={nowPlayingMovies}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => <MovieItem data={item} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 20,
    marginLeft: 8,
    marginTop: 16,
    marginBottom: 8,
  }
})

export default MovieList