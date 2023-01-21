import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  useParams,
  NavLink,
  useLocation,
  Outlet,
} from 'react-router-dom';

import * as API from '../../API/Api';
import style from './MovieDescription.module.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    API.getDetailsMovies(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  if (movie === null) {
    return;
  }

  const { title, vote_average, poster_path, overview, genres } = movie;
  return (
    <div className={ style.container}>
      <NavLink className={ style.btnBack}  to={location.state ?? '/'}>{`<--`}Back</NavLink>
      <br />

      <img className={ style.img} src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />

      <h1>{title}</h1>
      <h2>User csore:</h2>
      <p>{Number(vote_average).toFixed(2)} / 10</p>
      <h2>Owerview:</h2>
      <p> {overview}</p>
      <h2>Genres</h2>
      <p>{genres.map(ganre => ganre.name).join(', ')}</p>

      <h3>
        <Link to="cast">Cast</Link>
      </h3>
      <h3>
        <Link to="reviews">Reviews</Link>
      </h3>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
