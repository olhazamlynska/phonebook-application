import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin-left: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.primaryText};
  text-align: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    background-color: ${p => p.theme.colors.accentColor};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accentColor};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
