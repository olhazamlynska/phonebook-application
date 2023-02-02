import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${p => p.theme.space[3]}px;
  border-bottom: 2px solid ${p => p.theme.colors.accentColor};
`;
