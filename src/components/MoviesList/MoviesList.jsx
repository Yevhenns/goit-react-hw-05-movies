import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';
// import PropTypes from 'prop-types';

export const MoviesList = ({ moviesData, location }) => {
  return (
    <ul className={css.list}>
      {moviesData.map(({ original_title, name, id }) => {
        return (
          <li className={css.listItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p className={css.text}>{original_title ? original_title : name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
