import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrends } from '../getMovies';
import { useStateContext } from '../context/StateContext';
import css from './Page.module.css';

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
      <h1 className={css.title}>Trending today</h1>
      {trends.map(movie => {
        return (
          <NavLink
            className={css.home_link}
            to={`movies/${movie.id}`}
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
