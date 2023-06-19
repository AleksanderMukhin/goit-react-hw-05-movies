// import { useStateContext } from './context/StateContext';
// const { movieId } = useStateContext();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAwNGViNTJkYTE4NDRjODU4YjE1MzdlYzk1YTk5ZiIsInN1YiI6IjY0OGFkN2JlNDJiZjAxMDEwMWJjYjVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x090TXHYahh2QUQ1L2zsDvYpVzC9FYM2zQzILJ2OICE'
  }
};

const getTrends = async () => {

  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
    const resp = await response.json();
    const movies = await resp.results;
    // console.log(movies)
    return movies;
  } catch (err) {
    return console.error(err);
  }
}

const searchMovies = async (searchValue) => {  

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
    const resp = await response.json();
    const movies = await resp.results;
    // console.log(movies)
    return movies;
  } catch (err) {
    return console.error(err);
  }
}

const getMovieId = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    const resp = await response.json();
    
    return resp;
  } catch (err) {
    return console.error(err);
  }
}

const getCasts = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
    const resp = await response.json();
    
    return resp.cast;
  } catch (err) {
    return console.error(err);
  }
}

export { getTrends, searchMovies, getMovieId, getCasts }

// API Key: 37004eb52da1844c858b1537ec95a99f
// https://api.themoviedb.org/3/movie/550?api_key=37004eb52da1844c858b1537ec95a99f