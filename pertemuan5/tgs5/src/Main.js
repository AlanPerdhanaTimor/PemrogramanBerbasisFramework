import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
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

export default function tgs5() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <AuthButton />
          <LoginPage />
        </Route>
        <HomeRoute path="/home">
          <AuthButton />
          <ProtectedPage />
        </HomeRoute>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Toserba Adios!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>

    </Router>
  );
}

function Topics() {
  // `path` untuk membuat jalur <Route> yang terhadap rute induk,
  //sedangkan` url` untuk membuat link.
  let { path, url } = useRouteMatch();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Toserba Adios!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h2>Abouts</h2>
      <ul>
      <li>
          <Link to={`${url}/Alan Perdhana Timor`}>Nama</Link>
        </li>
        <li>
          <Link to={`${url}/erevalan@gmail.com`}>Email</Link>
        </li>
        <li>
          <Link to={`${url}/Username: AlanPerdhanaTimor`}>GitHub</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
          <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}


function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button type="button" class="btn btn-danger"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
      <p>You are not Logged in.</p>
    );
}

function HomeRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ProtectedPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Toserba Adios!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h1 class="text-center">Toserba Adios!</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2019/7/6/6329744/6329744_3f48deae-d058-4983-bab2-634e85795812_960_960.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Action Figure Anime Genos</h5>
              <p class="card-text">Kualitas terbaik action figure anime one puch man Genos.Bagus untuk koleksi atau pajangan</p>
              <a href="https://www.tokopedia.com/ummikidszone/best-action-figure-anime-genos" class="btn btn-success btn-lg">Beli</a>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2021/3/1/b98e214c-513c-4bca-ac46-9c0681fea277.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">PVC Figure 1/7 Klee Genshin Impact - Spark Knight Ver.</h5>
              <p class="card-text">Action figure Klee dari Genshin Impact</p>
              <a href="https://www.tokopedia.com/amajind/pvc-figure-1-7-klee-genshin-impact-spark-knight-ver" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/attachment/2019/10/1/156992605052964/156992605052964_53630ad1-c8b0-47fe-9ba6-62ccb0b8e923.png" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">NINTENDO SWITCH LITE GREY R3</h5>
              <p class="card-text">REGION : Jepang / Taiwan / Ausie / Asia / Eur (tergantung stock dari supplier) Switch Region Free (tidak ngaruh apa2)LANGUAGE : ENGLISH</p>
              <a href="https://www.tokopedia.com/gam35tation/nintendo-switch-lite-grey-r3?src=topads" class="btn btn-success btn-lg">Beli</a>
            
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">PlayStation 5 Console</h5>
              <p class="card-text">Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.
Stunning Games - Marvel at incredible graphics and experience new PS5 features.
Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.</p>
<a href="https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2020/6/30/4544681/4544681_68948ab0-74b1-4bc0-b1c3-7f1357ec1c15_700_700" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">ASUS ROG STRIX G512LI-I75TB6T</h5>
              <p class="card-text">Spesifikasi :
- Processor Onboard : 10th Generation Intel® Core™ i7-10750H Processor (12M Cache, up to 5.00 GHz)
- Memori Standar : 8 GB DDR4 3200Hz SDRAM, SO-DIMM socket for expansion, up to 32 GB SDRAM,
- Tipe Grafis : NVIDIA® GeForce® GTX 1650Ti GDDR6, with 4GB VRAM
- Sistem Operasi : Windows 10 Home
- Ukuran Layar : 15.6 (16:9) LED-backlit FHD (1920x1080) Anti-Glare IPS-level 144Hz Panel 100% SRGB
With FreeSync
- STORAGE : 512GB SSD SATA PCIE
- Keyboard : Illuminated Chiclet Keyboard RGB</p>
<a href="https://www.tokopedia.com/envicstore/asus-rog-strix-g512li-i75tb6t-i7-10750h-8gb-512gb-gtx1650ti-4gb-144hz?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2019/11/2/810764/810764_fa392dc9-656f-46d2-8198-a7485d770e53_1000_1000" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Xbox One S Wireless Controller PC Windows</h5>
              <p class="card-text">Precision controller compatible with Xbox One, Xbox One S and Windows 10.
Includes Bluetooth technology for gaming on Windows 10 PCs and tablets.
Stay on target with textured grip.
Get up to twice the wireless range compared to previous Xbox One Controllers (tested using the Xbox One S Console).
Experience the enhanced comfort and feel of the new Xbox Wireless Controller.</p>
<a href="https://www.tokopedia.com/bekasigame/stik-stick-xbox-one-s-wireless-controller-pc-windows-original-putih?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2018/12/5/17433/17433_41ef5f17-340d-4d7c-8c19-81aff1834a8a.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Eachine E58 Drone Foldable Quadcopter</h5>
              <p class="card-text">E58 merupakan drone yang dapat dilipat, sehingga mudah dibawa kemana saja. Drone ini memiliki Hold Mode Height untuk memberikan flight (penerbangan) 
              yang stabil serta dilengkapi fungsi WiFi yang dapat dihubungkan dengan smartphone melalui APP</p>
<a href="https://www.tokopedia.com/tanaga/eachine-e58-drone-foldable-quadcopter-wifi-with-2mp-wide-angle-camera?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}