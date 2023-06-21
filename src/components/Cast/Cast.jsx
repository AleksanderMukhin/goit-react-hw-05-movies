import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../../getMovies';

const Cast = () => {
  const { movieId } = useParams();

  const [acteurs, setActeurs] = useState({});
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const cast = async () => {
      const casts = await getCasts(movieId);
      setActeurs(casts);
    };
    if (movieId) cast();
  }, [movieId]);

  return (
    <>
      <ul>
        {acteurs.length > 0 ? (
          acteurs.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  style={{ width: '100px' }}
                  src={
                    profile_path
                      ? `${BASE_URL_IMG}${profile_path}`
                      : 'https://picsum.photos/seed/cats/230/345'
                  }
                  alt="name"
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any acteurs for this movie</p>
        )}
      </ul>
    </>
  );
};

export default Cast;
