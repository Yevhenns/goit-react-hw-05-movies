import { getMovieById } from 'services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [filmCast, setFilmCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      getMovieById(movieId, true, false).then(data => {
        setFilmCast(data.cast);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {filmCast.length > 0 ? (
        <ul>
          {filmCast.map(actor => {
            const { name, profile_path, character } = actor;
            return (
              <li key={name}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  width="200"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, cast not found</p>
      )}
      {error && error.message}
    </div>
  );
};
