import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MovieList from './components/MovieList';
import { API_KEY, GENRES, PAGE_SIZE } from './api';
import styles from './Styles';

const App = () => {
  const [moviesByYear, setMoviesByYear] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    fetchMovies();
  }, [currentPage, selectedGenre]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const genreParam = GENRES[selectedGenre] ? `&with_genres=${GENRES[selectedGenre]}` : '';
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&vote_count.gte=100&page=${currentPage}${genreParam}`
      );
      const movies = response.data.results;

      const newMoviesByYear = { ...moviesByYear };

      movies.forEach(movie => {
        const releaseYear = new Date(movie.release_date).getFullYear();
        if (releaseYear >= 2012) {
          if (!newMoviesByYear[releaseYear]) {
            newMoviesByYear[releaseYear] = [];
          }
          if (newMoviesByYear[releaseYear].length < 8) {
            newMoviesByYear[releaseYear].push(movie);
          }
        }
      });

      setMoviesByYear(newMoviesByYear);
      let allYearsFilled = true;
      for (const year of Object.keys(newMoviesByYear)) {
        if (newMoviesByYear[year].length < 8) {
          allYearsFilled = false;
          break;
        }
      }

      if (!allYearsFilled) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEndReached = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    setMoviesByYear({});
  };

  const renderFooter = () => {
    return loading ? <ActivityIndicator style={styles.loader} size="large" color="#0000ff" /> : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MOVIEFIX</Text>
      </View>
      <View style={styles.filterContainer}>
        {Object.keys(GENRES).map((genre) => (
          <TouchableOpacity
            key={genre}
            onPress={() => handleGenreChange(genre)}
            style={[
              styles.filterButton,
              selectedGenre === genre && styles.selectedFilterButton,
            ]}
          >
            <Text
              style={[
                styles.filterLabel,
                selectedGenre === genre && styles.selectedFilterLabel,
              ]}
            >
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={Object.keys(moviesByYear)}
        renderItem={({ item: year }) => <MovieList year={year} movies={moviesByYear[year]} />}
        keyExtractor={(item) => item}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={handleEndReached}
        contentContainerStyle={styles.movieList}
      />
    </View>
  );
};

export default App;
