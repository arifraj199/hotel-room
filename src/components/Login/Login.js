import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../UserContexts/UserContexts";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  // console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        console.log(user);
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="w-25 mx-auto mt-5 shadow p-4 rounded-3"
    >
      <h4 className="text-center mb-3 fw-bold">Login</h4>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-semibold">Email address</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="fw-semibold">Password</Form.Label>
        <Form.Control type="password" name="password" />
      </Form.Group>
      <Button className="w-100 fw-bold" variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Login;
