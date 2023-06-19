import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrends } from '../getMovies';
import { useStateContext } from '../context/StateContext';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const { setMovieId } = useStateContext();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await getTrends();
      setTrends(movies);
    };
    getMovies();
  }, []);

  const stateID = movie => {
    setMovieId(movie.id);
  };

  return (
    <div>
      <h1>Trending today</h1>
      {trends.map(movie => {
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
    </div>
  );
};

export default Home;
