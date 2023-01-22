import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

import * as API from '../../API/Api';
import style from './SearchMovie.module.css';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  // const [query, setQuery] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('movie');
  const location = useLocation();


  useEffect(() => {
    if (movieToSearch === null) {
      return;
    }

    API.getSerchMovies(movieToSearch).then(e => setMovieList(e.results));
  }, [movieToSearch]);

  const submitHandler = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.movie;

    setSearchParams({ movie: value });
    // setQuery(value);

    e.currentTarget.reset();
  };

  return (
    <div>
      <div className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={submitHandler}>
          <input
            // value={query}
            className={style.SearchFormInput}
            type="text"
            placeholder="input movie name"
            name="movie"
          />
          <button className={style.SearchFormButton} type="submit"></button>
        </form>
      </div>
      {movieList !== null && (
        <ul>
          {movieList.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                {original_title}{' '}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;