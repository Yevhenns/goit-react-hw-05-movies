import { Link } from 'react-router-dom';
import css from './/MoviesList.module.css';
// import PropTypes from 'prop-types';
// import styles from './MoveList.module.css';

export const MoviesList = ({ moviesData, location }) => {
  return (
    <ul className={css.list}>
      {moviesData.map(({ original_title, name, id, poster_path }) => {
        return (
          <li className={css.listItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                alt={original_title}
                width="400"
              />
              <p className={css.text}>{original_title ? original_title : name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
