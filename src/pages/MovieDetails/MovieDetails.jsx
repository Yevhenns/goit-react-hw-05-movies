import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/API';

// import styles from './MovieItem.module.css';
// import { Spinner } from 'components/Spinner/Spinner';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    try {
      getMovieById(movieId, false, false).then(data => {
        const { original_title, overview, poster_path, genres, popularity } =
          data;
        setMovieData({
          original_title,
          overview,
          poster_path,
          popularity,
          genres: genres.map(genre => genre.name),
        });
      });
    } catch (error) {
      setError(error);
    }
  }, [movieId]);

  return (
    <div>
      {movieData && (
        <>
          <Link to={backLink}>
            Go back
          </Link>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400${movieData.poster_path}`}
              alt={movieData.original_title}
              width="200"
            />
            <div>
              <h2>{movieData.original_title}</h2>
              <p>User Score: {movieData.popularity}%</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>

              <p>{movieData.genres.join(' ')}</p>
            </div>
          </div>

          <ul>
            <span>Additional infromation</span>
            <li>
              <NavLink to="cast" state={{ from: backLink }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from: backLink }}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {error && error.message}
    </div>
  );
};
