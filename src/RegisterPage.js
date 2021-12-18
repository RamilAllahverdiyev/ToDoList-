import React from "react";
import "./RegisterPage.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./homeScreen/homeScreen";
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      password2: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.changepassword2 = this.changepassword2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick () {
    if(this.state.password === this.state.password2){
    const registered = {
      firstName: this.state.fullName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/todolist/signup", registered)
      .then((response) =>{
        if (response.data === "successful") {
          this.props.history.push("/home");
        }else if(response.data==="alreadyExist"){
          alert("User Already Exist");
        } else {
          alert("Cannot Signed Up " + response.data);
        }
      })
      
   
      
    }
    else{
      alert("Passwords are not equal");
    }
  };
  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  changeusername(event) {
    this.setState({
      username: event.target.value,
    });
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
  changepassword2(event) {
    this.setState({
      password2: event.target.value,
    });
  }
  render() {
    return (
      <div className="Form">
        <form className="w-50">
          <div class="form-row">
            <div>
              <label for="validationDefault01">First name</label>
              <input
                type="text"
                class="form-control formcontrol"
                id="validationDefault01"
                placeholder="First name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                required
              />
            </div>
            <div>
              <label for="validationDefault02">Last name</label>
              <input
                type="text"
                class="form-control formcontrol"
                id="validationDefault02"
                placeholder="Last name"
                onChange={this.changeLastName}
                value={this.state.lastName}
                required
              />
            </div>
            <div>
              <label for="validationDefaultUsername">Username</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <div className="formcontrolusername">
                  <input
                    type="text"
                    class="form-control formcontrol"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
                    onChange={this.changeusername}
                    value={this.state.username}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div>
              <label for="validationDefault03">Email</label>
              <input
                type="text"
                class="form-control formcontrol"
                id="validationDefault03"
                placeholder="Email"
                onChange={this.changeemail}
                value={this.state.email}
                required
              />
            </div>
            <div>
              <label for="validationDefault04">Password</label>
              <input
                type="password"
                class="form-control formcontrol"
                id="validationDefault04"
                placeholder="Password"
                onChange={this.changepassword}
                value={this.state.password}
                required
              />
            </div>
            <div>
              <label for="validationDefault05">Password</label>
              <input
                type="password"
                class="form-control formcontrol"
                id="validationDefault05"
                placeholder="Password"
                onChange={this.changepassword2}
                value={this.state.password2}
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div>
            <Button
              onClick={this.handleClick}
              class="btn btn-primary"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;