import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MovieItem from './MovieItem';
import styles from '../Styles';

const MovieList = ({ year, movies }) => {
  return (
    <View style={styles.yearSection} key={year}>
      <Text style={styles.yearTitle}>{year}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        numColumns={2}
      />
    </View>
  );
};

export default MovieList;