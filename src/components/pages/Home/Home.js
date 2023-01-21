import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as API from '../../API/Api';
import style from './Home.module.css'

export const Home = () => {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    API.getPoPMovies().then(movies => setPopMovies(movies.results));
  }, []);

  return (
    <>
      <ul className={style.ImageGallery}>
        {popMovies.map((popMovie ) => (
          <li key={popMovie.id} className={style.ImageGalleryItem}>
            
            <Link to={`/movies/${popMovie.id}`}>
              <img className={style.ImageGalleryItemImage} src={`https://image.tmdb.org/t/p/w300/${popMovie.poster_path}`} alt={popMovie.title} />
              <br />
              <p className={style.p}>{popMovie.title}</p>
              </Link>
          </li>
        ))}
      </ul>
    </>
  );
};


