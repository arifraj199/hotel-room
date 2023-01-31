import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContexts/UserContexts";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
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
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  const googleLogin = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
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
      {error && <p className="text-danger">{error}</p>}
      <Button className="w-100 fw-bold" variant="primary" type="submit">
        Register
      </Button>
      <p className="text-center mt-2 mb-2">OR</p>
      <div className="mt-0">
        <Button
          onClick={googleLogin}
          variant="outline-success w-100 fw-semibold"
        >
          Google Login
        </Button>{" "}
      </div>
      <p className="mt-3 fw-semibold">
        New To Hotel X-CROSS?{" "}
        <small>
          <Link to="/register">Register Now!</Link>
        </small>{" "}
      </p>
    </Form>
  );
};

export default Login;
