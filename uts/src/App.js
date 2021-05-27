import logo from './logo.svg';
import './App.css';
import About from "./component/BlogPost/About";
import BlogPost from "./container/BlogPost/BlogPost";
import BlogPost1 from "./containerK/BlogPost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">

          <a class="navbar-brand" href="index.html">
            <img src="pngegg (1).png" alt="Avatar" className="photo"/>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/home">Home</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/produk">List Produk</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/keranjang">List Keranjang</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/about">About</Link></a>
                  </li>
              </ul>
          </div>
      </nav>
        <Switch>
          <Route path="/produk">
            <BlogPost/>
          </Route>
          <Route path="/home">
            <BlogPost/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/keranjang">
            <BlogPost1/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
