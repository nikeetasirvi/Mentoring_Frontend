import react, { useState, useRef, FormEvent } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { users } from '../Data/users';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // const [error, setError] = useState<string | null>(null);
  const [usernameError, setUError] = useState<string | null>(null);
  const [passwordError, setPError] = useState<string | null>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const doLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef?.current?.value;
    const password = passwordRef?.current?.value;
    const matchedUsername = users.users.find(user => {
      return user.username === username;
    });
    if (matchedUsername) {
      if (matchedUsername.password === password) {
        //both username and password are correct
        navigate("/home");
      } else {
        //password is incorrect
        setPError('incorrect password')
        setUError(null);
      }
    }
    else {
      //username is incorrect
      setUError("incorrect username");
      setPError(null);
    }
  }

  return (
    <div>
      <Form onSubmit={doLogin}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
        </Form.Group>
        {
          usernameError && (
            <p style={{ color: 'red' }}>{usernameError}</p>
          )
        }

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        {
          passwordError && (
            <p style={{ color: 'red' }}>{passwordError}</p>
          )
        }

        <Button variant="primary" type="submit">
          Login
        </Button>

      </Form>
    </div>
  );
}

export default Login;