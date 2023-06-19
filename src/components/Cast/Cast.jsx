import { useStateContext } from 'context/StateContext';
import { useEffect, useState } from 'react';
import { getCasts } from '../../getMovies';

const Cast = () => {
  const { movieId } = useStateContext();
  const [acteurs, setActeurs] = useState({});
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const cast = async () => {
      const casts = await getCasts(movieId);
      setActeurs(casts);
      // console.log(casts);
    };
    if (movieId) cast();
  });
  console.log(acteurs);
  return (
    <>
      <ul>
        {acteurs &&
          acteurs.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `${BASE_URL_IMG}${profile_path}`
                      : 'https://picsum.photos/seed/cats/230/345'
                  }
                  alt="name"
                />
                <p>{original_name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
