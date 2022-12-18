import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: grey;
  font-size: 30px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  &:first-child {
    margin-right: 20px;
  }
  &.active {
    color: black;
    box-shadow: 10px 5px 5px grey;
  }
`;
export const Nav = styled.nav`
  background-color: teal;
  padding: 20px;
`;
export const List = styled.ul`
  display: flex;
`;

