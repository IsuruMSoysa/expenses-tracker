/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Row className="login-cont">
      <Col className="login-panel p-md-4" xl={3} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3">Expenses Tracker</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="text-center" controlId="loginBtn">
            <ProjectButton
              label="Log in"
              backgroundColor="#1abda9"
              size="small"
              // btnOnClick={() => navigate("/login")}
            />
          </Form.Group>
          <Form.Group
            className="mt-3 create-account-label text-center"
            controlId="createAccount"
          >
            <Form.Label onClick={() => navigate("/signin")}>
              Don't have an account? Create Account
            </Form.Label>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginPage;
