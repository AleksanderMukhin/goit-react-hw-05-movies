import { useStateContext } from 'context/StateContext';
import { useEffect, useState } from 'react';
import { getReviews } from '../../getMovies';

const Reviews = () => {
  const { movieId } = useStateContext();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const reviews = async () => {
      const review = await getReviews(movieId);
      setReviews(review);
    };
    if (movieId) reviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
