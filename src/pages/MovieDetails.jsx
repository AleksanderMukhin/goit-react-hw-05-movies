import { useRef } from 'react';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { getMovieId } from '../getMovies';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId, BASE_URL } = useStateContext();
  const location = useLocation();
  console.log(location);
  const backToLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const details = async () => {
      const movie = await getMovieId(movieId);
      setMovieDetail(movie);
    };
    if (movieId) details();
  }, [movieId]);

  const { title, poster_path, original_title, vote_average, overview, genres } =
    movieDetail;
  return (
    poster_path && (
      <>
        <NavLink to={backToLocation.current}>Back movies</NavLink>
        <div>
          <img src={`${BASE_URL}${poster_path}`} alt={original_title} />
          <h2>{title}</h2>
          <p>Users score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
          <nav>
            Additional information
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="rewiews">Reviews</NavLink>
          </nav>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </>
    )
  );
};

export default MovieDetails;
