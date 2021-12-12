import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import React from "react";
import { Link } from 'react-router-dom';
import '../homeScreen/homeScreen';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
    };
    //   this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="Form">
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="EmailForm"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="PasswordForm"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
          <div className ="Buttons">
            <div className="Submit">
            <Link to = "/home">
              <Button className="SubmitButton" variant="primary" type="submit">
                Login
              </Button>
              </Link>
            </div>
            
            <div className="SignUpp">
            <Link to = "/Register">
              <Button className="SignUpButton" variant="primary" type="submit">
                Sign Up
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
