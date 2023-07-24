import LoginForm from 'components/LoginForm';

const { Helmet } = require('react-helmet');

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
