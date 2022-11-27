import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <SC.Link to="/">Home</SC.Link>
        </li>
        <li>
          <SC.Link to="/movies">Movies</SC.Link>
        </li>
      </ul>
    </nav>
  );
};
