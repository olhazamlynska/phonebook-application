import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
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
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          placeholder="mango@mail.com"
          title="Email may contain only letters and end in @yourmail.com. For example mango@mail.com, polly@gmail.com"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          title="Password shoul contain letters and numbers."
          required
        />
      </label>
      <button type="submit" aria-label="log in">
        Log In
      </button>
    </form>
  );
};
