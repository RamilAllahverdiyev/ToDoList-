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
    this.deleteTasks = this.deleteTasks.bind(this);

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
    let arr = this.state.tasks
    arr.push(data.task)
    this.setState({
        task: "",
        tasks: arr,
    })
  }

  getTasks(){
      let userMail = localStorage.getItem('userMail');

      axios
          .get("http://localhost:4000/todolist/gettasks", {
              params: {
                  email: userMail,
              },
          })
          .then((response) => {
              if(response.data != "unsuccessful") {
                  this.setState({
                      tasks: response.data,
                  });
              }
          })
  }
  deleteTasks(index){
      let userMail = localStorage.getItem('userMail');

      const data = {
          email: userMail,
          index: index
      };

      axios
          .post("http://localhost:4000/todolist/deletetask", data)

      let arr = this.state.tasks
      arr.splice(index , 1)
      this.setState({
            tasks: arr
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
                      {this.state.tasks != [] && this.state.tasks.map((task, index) =>
                              <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>{task.taskName}</td>
                                  <td>
                                      <button type="button" onClick={()=>  this.deleteTasks(index)} className="text-danger">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                               fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                              <path
                                                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                              <path fill-rule="evenodd"
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
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