import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './homeScreen.css'

class homeScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          task: "",
          search:""
      };
    this.changetask = this.changetask.bind(this);
    this.changesearch = this.changesearch.bind(this);
    this.handleClick = this.handleClick.bind(this);

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
alert(this.state.task)
alert(this.state.search)
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
                      <input type="text" placeholder="Enter Task" id="addtaskinput" autoFocus="" onChange={this.changetask} />
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
                      <table id="addedtasklist"></table>
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