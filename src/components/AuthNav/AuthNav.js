import { Link, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};
