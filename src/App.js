import SignIn from './SignIn/SignIn.js';
import './App.css';
import Register from "./RegisterPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App d-flex justify-content-center ">
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

