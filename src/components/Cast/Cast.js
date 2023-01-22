import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../API/Api';
import style from './Cast.module.css'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getCastMovies(movieId).then(movie => setCast(movie.cast));
  }, [movieId]);

  if (cast === null) {
    return;
  }

  return (
    <>
      <ul className={style.ImageGallery}>
        {cast.map(c => (
          <li key={c.id} className={style.ImageGalleryItem}>
            <img
               className={style.ImageGalleryItemImage}
              width={100}
              src={`https://image.tmdb.org/t/p/w300/${c.profile_path}`}
              alt={c.name}
            />
            <p>Name: {c.name}</p>
          </li>
        ))}
      </ul>
      <h3>CAST</h3>
    </>
  );
};
export default Cast;