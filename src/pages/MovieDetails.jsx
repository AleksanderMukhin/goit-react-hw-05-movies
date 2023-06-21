import { useRef } from 'react';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { getMovieId } from '../getMovies';
import css from './Page.module.css';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { BASE_URL } = useStateContext();

  const { movieId } = useParams();

  const location = useLocation();
  const backToLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const details = async id => {
      const movie = await getMovieId(id);
      setMovieDetail(movie);
    };
    if (movieId) details(movieId);
  }, [movieId]);

  const { title, poster_path, original_title, vote_average, overview, genres } =
    movieDetail;
  return (
    title && (
      <>
        <NavLink className={css.btn_back} to={backToLocation.current}>
          &#8592; Back
        </NavLink>
        <div>
          <div className={css.film}>
            <div>
              <img
                className={css.film_image}
                src={
                  poster_path
                    ? `${BASE_URL}${poster_path}`
                    : 'https://picsum.photos/seed/cats/230/345'
                }
                alt={original_title}
              />
            </div>

            <div className={css.film_context}>
              <h2>{title}</h2>
              <p>Users score: {Math.round(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres &&
                  genres.map(({ name, id }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>

          <nav className={css.add_info}>
            <p>Additional information</p>
            <NavLink className={css.add_info_link} to="cast">
              Cast
            </NavLink>
            <NavLink className={css.add_info_link} to="rewiews">
              Reviews
            </NavLink>
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
