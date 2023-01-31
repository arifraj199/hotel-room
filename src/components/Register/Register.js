import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContexts/UserContexts";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if (password !== confirmPassword) {
      alert("password did not match!!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setUsers(user);
        setError("");
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="w-25 mx-auto mt-5 shadow p-4 rounded-3"
    >
      <h4 className="text-center mb-3 fw-bold">Register</h4>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-semibold">Email address</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="fw-semibold">Password</Form.Label>
        <Form.Control type="password" name="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirm">
        <Form.Label className="fw-semibold">Confirm Password</Form.Label>
        <Form.Control type="password" name="confirm" />
      </Form.Group>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">User Created Successfully</p>}
      <Button className="w-100 fw-bold" variant="primary" type="submit">
        Register
      </Button>
      <p className="mt-3 fw-semibold">
        Have an Accoun on Hotel X-CROSS?{" "}
        <small>
          <Link to="/login">Login Now!</Link>
        </small>{" "}
      </p>
    </Form>
  );
};

export default Register;
