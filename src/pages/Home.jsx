import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/API';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(res => setTrendMovies(res));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(trendMovie => (
          <li key={trendMovie.id}>{trendMovie.title}</li>
        ))}
      </ul>
    </>
  );
};
