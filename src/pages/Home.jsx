import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/API';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrendMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(trendMovie => (
          <li key={trendMovie.id}>
            <Link to={trendMovie.id}>{trendMovie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
