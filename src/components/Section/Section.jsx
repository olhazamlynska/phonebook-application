import PropTypes from 'prop-types';
import { SectionStyle, Title } from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
