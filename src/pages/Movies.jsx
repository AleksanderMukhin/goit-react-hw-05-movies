import { searchMovies } from '../getMovies';
import { useStateContext } from '../context/StateContext';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const { input, setInput, setMovieId } = useStateContext();

  useEffect(() => {
    const getMovieSearch = async () => {
      const movieSearch = await searchMovies(searchValue);
      setSearchFilms(movieSearch);
    };
    getMovieSearch();
  }, [searchValue]);

  const handleChange = ({ target: { value } }) => {
    setInput(value.trim());
  };

  const submitSearch = evt => {
    evt.preventDefault();
    if (!input) {
      alert('Enter data to search!');
      return;
    }
    setSearchValue(input);
    setInput('');
  };

  const stateID = movie => {
    setMovieId(movie.id);
  };

  console.log(searchValue);
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
