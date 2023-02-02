import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;

  border-top: 2px solid ${p => p.theme.colors.accentColor}; ;
`;

export const FooterH2 = styled.h2`
  text-align: center;
  color: ${p => p.theme.colors.accentColor}; ;
`;
