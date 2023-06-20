import { searchMovies } from '../getMovies';
import { useStateContext } from '../context/StateContext';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const { input, setInput, setMovieId, searchParams, setSearchParams } =
    useStateContext();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const getMovieSearch = async () => {
      const movieSearch = await searchMovies(searchQuery);
      setSearchFilms(movieSearch);
    };
    getMovieSearch();
  }, [searchQuery]);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    console.log(input);
  };

  const submitSearch = evt => {
    evt.preventDefault();
    if (!input) {
      alert('Enter data to search!');
      return;
    }
    input ? setSearchParams({ query: input }) : setSearchParams({});
    setInput('');
  };

  const stateID = movie => {
    setMovieId(movie.id);
  };

  console.log(searchQuery);
  return (
    <div>
      <form onSubmit={submitSearch}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
          value={input}
          name="input"
        />
      </form>
      <div>
        <ul>
          {searchFilms &&
            searchFilms.map(movie => {
              return (
                <NavLink
                  to="/movies/:movieId"
                  onClick={() => stateID(movie)}
                  key={movie.id}
                  state={{ from: location }}
                >
                  <li key={movie.id}>{movie.name || movie.title}</li>
                </NavLink>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
