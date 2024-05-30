import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#222',
    padding: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#007BFF',
  },
  filterLabel: {
    fontSize: 16,
    color: '#fff',
  },
  selectedFilterLabel: {
    color: '#fff',
  },
  movieList: {
    paddingBottom: 20,
  },
  yearSection: {
    marginBottom: 20,
  },
  yearTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: 'left',
  },
  movieItem: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#222',
  },
  poster: {
    width: '100%',
    height: 200,
  },
  movieDetails: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratings: {
    fontSize: 12,
    color: '#fff',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default styles;
