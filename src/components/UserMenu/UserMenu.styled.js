import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  height: 45px;
  margin-right: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.primaryText};
  text-align: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;

export const OutlinedName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserName = styled.p`
  text-align: center;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  min-width: 400px;
  margin-left: ${p => p.theme.space[4]}px;
  display: inline-flex;
  align-items: center;
`;
