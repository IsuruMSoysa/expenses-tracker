/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import { useState } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../features/auth/authSlice";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";

// import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authObj = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    dispatch(toggleLoading());
    e.preventDefault();
    try {
      let validate = await dispatch(login(email, password));
      if (validate.success) {
        dispatch(toggleLoading());
        navigate(`/Dashboard/${validate.uid}`);
      } else {
        dispatch(toggleLoading());
        alert(validate.message);
      }
    } catch (error) {
      dispatch(toggleLoading());
      console.log(error.message);
    }
  };

  return (
    <Row className="login-cont">
      <Col className="login-panel p-md-4" xl={3} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3">Expenses Tracker</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="text-center" controlId="loginBtn">
            <ProjectButton
              label="Log in"
              backgroundColor="#0ad357"
              size="small"
              type="submit"
            />
          </Form.Group>
          <Form.Group
            className="mt-3 create-account-label text-center"
            controlId="createAccount"
          >
            <Form.Label onClick={() => navigate("/signup")}>
              Don't have an account? Create Account
            </Form.Label>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginPage;
