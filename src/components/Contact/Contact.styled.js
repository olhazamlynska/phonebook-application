import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  width: 500px;
  height: 40px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ContactsName = styled.span`
  margin-left: 0;
  color: ${p => p.theme.colors.accentColor};
`;

export const ContactsPhone = styled.span`
  flex-grow: 1;
  text-align: right;
  margin-left: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accentColor};
`;
export const DeleteBtn = styled.button`
  height: 30px;

  margin-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accentColor};
  }
`;
