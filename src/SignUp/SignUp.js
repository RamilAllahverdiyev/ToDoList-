import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignUp.css";
import React from "react";
class SignUp extends React.Component {
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
          <div className="Submit">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
