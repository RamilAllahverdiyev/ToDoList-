import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './homeScreen.css'
import axios from "axios";
import UserProfile from './userprofile'
import userprofile from "./userprofile";


class homeScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          task: "",
          search:"",
          email:"this.state.location.email",
          tasks: []
      }

    this.changetask = this.changetask.bind(this);
    this.changesearch = this.changesearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getTasks = this.getTasks.bind(this);
  }
    componentDidMount(){
        this.getTasks();
    }
    changetask(event) {
        this.setState({
            task: event.target.value,
        });
    }
    changesearch(event) {
        this.setState({
            search: event.target.value,
        });
    }


handleClick(){
    const data = {
          email: userprofile.getemail(),
          task: {
              taskName: this.state.task,
              date: Date().toLocaleString()
          }
      };

    axios
        .post("http://localhost:4000/todolist/addtask", data)
    this.setState({
        task: "",
    });

    this.getTasks()

  }

  getTasks(){
      axios
          .get("http://localhost:4000/todolist/gettasks", {
              params: {
                  email: userprofile.getemail(),
              },
          })
          .then((response) => {
              this.setState({
                  tasks: response.data,
              });
          })
  }
  render() {
    return(
      <div>
          <body className="position-relative">
          <main id="app" className="position-absolute m-auto">
              <div className="
          left__side
          d-flex
          align-items-center
          justify-content-between
          flex-column
        ">
                  <div className="task__input">
                      <input type="text" placeholder="Enter Task" id="addtaskinput" autoFocus="" onChange={this.changetask} value={this.state.task} />
                      <input type="hidden" id="saveindex"/>
                  </div>

                  <div className="task__controls">
                      <a href="#" type="button" id="addtaskbtn" onClick={this.handleClick}>
                          <img
                              src="https://raw.githubusercontent.com/bhupenderhere/to-do-list-web-application/658cbe1ec20867d446ab3b919d52d4dbb5fa833b/images/svg/add.svg"
                              alt="add"/>
                          <span>Add Task</span>
                      </a>
                  </div>
              </div>
              <div className="right__side">
                  <div className="search__bar">
                      <form className="d-flex align-items-center justify-content-center">
                          <input placeholder="Search Task" id="searchtextbox" onChange={this.changesearch}/>
                      </form>
                  </div>
                  <div className="to__do__list">
                      <table id="addedtasklist">
                      {this.state.tasks.map((task, index) =>
                              <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>{task.taskName}</td>
                                  <td>
                                      <button type="button" onClick="" className="text-danger">
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                              <path d="M3 6H5H21" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                              <path
                                                  d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M10 11V17" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                              <path d="M14 11V17" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                          </svg>
                                      </button>
                                  </td>
                              </tr>
                      )}
                      </table>

                  </div>
              </div>
          </main>
          </body>
          <h1></h1>
      </div>
    );
  }
}
export default homeScreen;