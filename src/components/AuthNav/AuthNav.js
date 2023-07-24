import { Link, Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};
export default AuthNav;
