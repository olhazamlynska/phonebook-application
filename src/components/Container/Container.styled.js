import styled from 'styled-components';

export const ContainerWrapp = styled.div`
  width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: ${p => p.theme.breakpoints[1]};
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: ${p => p.theme.breakpoints[2]};
    padding: 0 50px;
  }
`;
