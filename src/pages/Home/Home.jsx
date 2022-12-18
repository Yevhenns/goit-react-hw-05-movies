import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/API';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getTrendMovies().then(data => {
        setTrendMovies(data);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList moviesData={trendMovies} />
      {error && error.message}
    </>
  );
};
