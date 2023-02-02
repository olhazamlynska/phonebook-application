import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  AllForm,
  Label,
  Input,
  Btn,
} from 'components/RegisterForm/RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <AllForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Username
        <Input type="text" name="name" placeholder="Kate Tart" required />
      </Label>
      <Label htmlFor="email">
        Email
        <Input type="email" name="email" placeholder="kate123@gmail.com" />
      </Label>
      <Label htmlFor="password">
        Password
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </Label>
      <Btn type="submit" aria-label="log in">
        Register
      </Btn>
    </AllForm>
  );
};
