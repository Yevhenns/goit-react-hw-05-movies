import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'services/API';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setsearchMovies] = useState([]);
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieBySearch(query).then(data => {
      if (data.length > 0) {
        setsearchMovies(data);
      } else {
        alert('Sorry, movies not found');
      }
    });
  }, [query]);

  const HandlerSabmit = e => {
    e.preventDefault();
    if (e.target.elements.name.value === '') {
      alert('Please write the name of the movie');
      return;
    }

    const query = e.target.elements.name.value;
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={HandlerSabmit}>
        <input name="name" type="text" />
        <button type="submit">submit</button>
      </form>
      {query && searchMovies.length > 0 && (
        <MoviesList moviesData={searchMovies} location={location} />
      )}
    </div>
  );
};
