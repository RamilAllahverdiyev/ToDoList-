import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import React from "react";
import { Link, } from 'react-router-dom';
import '../homeScreen/homeScreen';
import axios from "axios";
import Goodbye from './Goodbye'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    let props = { email: this.state.email, password: this.state.password };
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
                onChange={this.changeemail}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="PasswordForm"
                type="password"
                placeholder="Password"
                onChange={this.changepassword}
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
          <div className="Buttons">
            <div className="Submit">
              <Goodbye {...props}></Goodbye>
            </div>
            <div className="SignUpp">
              <Link to="/Register">
                <Button
                  className="SignUpButton"
                  variant="primary"
                  type="submit"
                >
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
