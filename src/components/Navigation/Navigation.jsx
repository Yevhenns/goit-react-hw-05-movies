import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <SC.Nav>
      <SC.List>
        <li>
          <SC.Link to="/">Home</SC.Link>
        </li>
        <li>
          <SC.Link to="/movies">Movies</SC.Link>
        </li>
      </SC.List>
    </SC.Nav>
  );
};
