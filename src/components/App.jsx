import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import { Home } from './pages/Home/Home';
// import NotFound from './pages/NotFound/NotFound';
// import { Movies } from './pages/Movie/SearchMovie';
// import { MovieDetails } from './pages/Movie/MovieDescription';
// import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const MovieDetails = React.lazy(() => import('./pages/Movie/MovieDescription'));
const Movies = React.lazy(() => import('./pages/Movie/SearchMovie'));
const Cast = React.lazy(() => import('./Cast/Cast'));
// const Reviews = React.lazy(() => import('./Reviews/Reviews'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key={keyAPI}
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
