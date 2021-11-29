import React from "react";
import "./RegisterPage.css";
class RegisterPage extends React.Component {
render(){
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
                value=""
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
                value=""
                required
              />
            </div>
            <div>
              <label for="validationDefaultUsername">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  
                </div>
                <div className="formcontrolusername">
                  <input
                    type="text"
                    class="form-control formcontrol"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
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
                required
              />
            </div>
            <div>
              <label for="validationDefault04">Password</label>
              <input
                type="text"
                class="form-control formcontrol"
                id="validationDefault04"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label for="validationDefault05">Password</label>
              <input
                type="text"
                class="form-control formcontrol"
                id="validationDefault05"
                placeholder="Password"
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
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    );
    }
}

export default RegisterPage;