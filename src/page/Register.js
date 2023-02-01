import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const { Helmet } = require('react-helmet');

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
