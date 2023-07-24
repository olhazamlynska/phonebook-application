import styled from 'styled-components';
import {
  typography,
  layout,
  space,
  flexbox,
  background,
  border,
  color,
  position,
} from 'styled-system';

const Box = styled('div')(
  typography,
  layout,
  space,
  flexbox,
  background,
  border,
  color,
  position
);
export default Box;
