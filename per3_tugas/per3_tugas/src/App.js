import logo from './logo.svg';
import './style.css';
import Login from './component/Login';
import { BrowserRouter as Router, Switch ,Route,Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper bg-success">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
