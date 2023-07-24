import { ContainerWrapp } from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
