import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  AllForm,
  Label,
  Input,
  Btn,
} from 'components/LoginForm/LoginForm.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <AllForm action="submit" onSubmit={handleSubmit}>
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
        Log In
      </Btn>
    </AllForm>
  );
};
