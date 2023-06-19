import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { getMovieId } from '../getMovies';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId, BASE_URL } = useStateContext();

  useEffect(() => {
    const details = async () => {
      const movie = await getMovieId(movieId);
      setMovieDetail(movie);
      // console.log(movie);
    };
    if (movieId) details();
  }, []);

  const { title, poster_path, original_title, vote_average, overview, genres } =
    movieDetail;
  return (
    poster_path && (
      <div>
        <img src={`${BASE_URL}${poster_path}`} alt={original_title} />
        <h2>{title}</h2>
        <p>Users score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <nav>
          Additional information
          <NavLink to="cast">Cast</NavLink>
          <NavLink>Reviews</NavLink>
        </nav>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
