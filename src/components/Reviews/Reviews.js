import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../API/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getRewiesMovies(movieId).then(review => setReviews(review.results));
  }, [movieId]);

  if (reviews === null) {
    return;
  }

  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author:{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
