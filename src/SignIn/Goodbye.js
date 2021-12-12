import React from "react";
import { useHistory } from "react-router-dom";
import './SignIn.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
const Goodbye = (props) => {
  const history = useHistory();
  const handleClick = () => {
      
      axios.get("http://localhost:4000/todolist/login", {
          params: {
        email: props.email,
        password: props.password,
      }
      }).then((response) => {
        if (response.data === "successful") {
                   history.push("/home")
        }
        else{
            console.log(props)
            console.log(response.data)
        }
      });
  }
  return (
       <Button onClick={handleClick} className="SubmitButton" variant="primary" type="submit">
                Login
              </Button>
   
  );
};

export default Goodbye;
