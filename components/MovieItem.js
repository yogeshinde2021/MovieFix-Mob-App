import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Styles'

const MovieItem = ({ movie }) => {
  return (
    <View style={styles.movieItem}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <View style={styles.movieDetails}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.ratings}>Ratings: {movie.vote_average}</Text>
      </View>
    </View>
  );
};

export default MovieItem;
