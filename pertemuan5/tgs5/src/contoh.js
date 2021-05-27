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

export default function Tugas() {
  return (
    <Router>
      <Switch>
        <Route path="/kategori">
          <AuthButton />
          <KategoriPage />
        </Route>
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
        <a class="navbar-brand" href="#">Barbatos Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/kategori" class="nav-item nav-link active">Kategori</Link>
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
        <a class="navbar-brand" href="#">Barbatos Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/kategori" class="nav-item nav-link active">Kategori</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
      <hr />
      <h2>Abouts</h2>
      <br />
      <br />
      <img src="https://avatars.githubusercontent.com/u/56921668?s=400&u=6635bf0c6f9329d24565307d5b37b50361f16f0b&v=4" class="rounded mx-auto d-block"></img>
      <br />
      <br />
      <br />
      <ul>
      <li>
          <Link to={`${url}/Rhezaldi Irnantyo Irawan`}>Nama</Link>
        </li>
        <li>
          <Link to={`${url}/rhezaldiirnantyo339g@gmail.com`}>Email</Link>
        </li>
        <li>
          <Link to={`${url}/@aldirhezaldi_`}>Instagram</Link>
        </li>
        <li>
          <Link to={`${url}/Aldirhezaldi`}>GitHub</Link>
        </li>
        <li>
          <Link to={`${url}/085850336940`}>Nomor HP</Link>
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

function KategoriPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Barbatos Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/kategori" class="nav-item nav-link active">Kategori</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
      <hr />
      <h1 class="text-center">Welcome to Barbatos Shop</h1>
      <br />
      <br />
      <br />
      <h3 class="text-start">Kategori Barang :</h3>
      <br />
      <br />
      <h4 class="text-start">Barang Elektronik : </h4>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/12/21/f896cba7-6f49-4245-9fd5-7838074f99c1.png" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Headset / Headphone Gaming JETE-X GA5 / JETEX GA5</h5>
              <p class="card-text">Mikrofon sangat fleksibel. Arahnya dapat diatur secara bebas sesuai kebutuhan pengguna. Dilengkapi fitur noise reduction, mikrofon gaming headphone GA5 mampu menahan gangguan suara dari luar agar tidak didengarkan lawan dalam permainan. Memastikan mikrofon dapat menghasilkan suara dengan jelas di game atau obrolan online.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/0e7cc96b1895ffc122ec328a615d7c2a" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">SoundPEATS TrueAir Bluetooth 5.0 TWS Earphone Hi-Fi Stereo Sound APTX Wireless Earbuds</h5>
              <p class="card-text">Adopt advanced bluetooth 5.0 technology, built-in 14.2mm biomembrane speaker, with latest QCC3020 chipset and aptX codec, the earbuds provide stereo Hi-Fi sound with exceptional clarity.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71y73nqoHqL._AC_SY355_.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Tecware Phantom 87 Key Mechanical Keyboard, RGB led, Outemu Brown Switch</h5>
              <p class="card-text">RGB BACKLIGHTING - Enhance your gaming experience with 18 pre-set configurations on the mechanical keyboard, or create a unique one to match your setup</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2016/3/12/7993600/7993600_e8428f5d-28d9-4c24-aa7c-2a74ac59b878.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Kabel jumper male female breadboard arduino 10cm</h5>
              <p class="card-text">Panjang 10cm, tipe male to female
              Harga per 1 set: berisi 20pcs kabel jumper lengkap terminal male to female

              Cocok digunakan untuk menghubungkan arduino, breadboard, sensor, prototyping dan segala keperluan hobi elektronika untuk menghubungkan point ke point dengan male to female DuPont cable.
</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/8/15/42235959/42235959_72b6a16e-9cae-47fc-95b3-fcf0951d96b6_700_700" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Aspire Minican Kit Pod - Minican Kit 100% Authentic By Aspire</h5>
              <p class="card-text">Aspire MINICAN Pod System, featuring an integrated 350mAh battery, soft-touch rubberized chassis coating, and delivers tasty vapor from the 1.2ohm integrated mesh coil.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/16/13775870/13775870_98077b0b-ec13-4aec-88ef-218164c88bbb_1000_1000.jpeg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Flashdisk HP 64GB | Flash Disk HP 64 GB | USB Flash Drive | FD</h5>
              <p class="card-text">Spesifikasi :
              * Tipe USB 2.0
              * Software Support : Windows 2000, Windows XP, Windows Vista, Windows 7, Windows 8 or Mac OS 10.0.2
              * Produk yang tertera tidak bergaransi
              * Kapasitas TIDAK REAL
              * Barang yang dikirim kami pastikan dalam kondisi baru dan packing
              * Barang tidak test karena masih SEGEL, jika terjadi apa apa merupakan resiko pembeli
* Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan dengan alasan apapun</p>
            </div>
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <h4 class="text-start">Pakaian : </h4>
      <br />
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/8/34452767/34452767_239299c3-e5e5-4a69-9cb8-e3be1a21198d_1024_1024" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">KAOS / TSHIRT / BAJU UNIQLO x KAWS PREMIUM</h5>
              <p class="card-text">- SIZE : M,L (USA)</p>
              <p class="card-text">- SIZECHART : M 52x74cm - L 54x76cm</p>
              <p class="card-text">- MATERIAL : Cotton Combed 30s</p>
              <p class="card-text">- PRINTING/SABLON : Plastisol</p>
              <p class="card-text">- FULL HANGTAG dan LABEL</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/90dc70b432cc5b71e2f466a158f47017" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">ROUGHNECK 1991 HOODIE ZIPPER SMALL LOGO (HD BLACK 91)</h5>
              <p class="card-text">Hoodie distro branded <br />Bahan catton flace </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/24/24164592/24164592_2d93368b-7bc0-4fac-808e-4a288a8a8606_1567_1045.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">CELANA JOGGER PRIA WISH JOGGER SIDE CAMOUFLAGE JOGGER PANTS ORIGINAL</h5>
              <p class="card-text">- Original <br />- Unisex (Male/Female)<br />- Colour : Khaki<br />- Material cotton cinos</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/3bbd44c7dafd06330c8ee4e99db252ea" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Roughneck Dj81 Shiny Black Canvas Jacket</h5>
              <p class="card-text">Size chart Kanvas <br />S Panjang Badan x Lebar Badanx Panjang Tangan 60 cm x 48 cm x 57cm<br />M Panjang Badan x Lebar Badanx Panjang Tangan 63 cm x 51 cm x 59cm<br />L Panjang Badan x Lebar Badanx Panjang Tangan 66 cm x 54 cm x 61cm<br />XL Panjang Badan x Lebar Badanx Panjang Tangan 69 cm x 57 cm x 63cm</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h4 class="text-start">Toys and Figure : </h4>
      <br />
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/30/6121955/6121955_398f346b-3920-4e41-838d-b7e31f493a10_1500_1500"></img>
            <div class="card-body">
              <h5 class="card-title">RG Strike Freedom Gundam</h5>
              <p class="card-text">Kondisi MIB(Mint In Box)/BARU belum dirakit <br />Bandai (Original)</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/b3c1b889fbf0c1e66362fba3507d7c52" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">MG 1/100 Gundam Barbatos</h5>
              <p class="card-text">This is a posable, Master-Grade injection-plastic kit of an item from the Gundam universe.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/1c69090fbba058d8b24fbee61152b432" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">HOT WHEELS LAMBORGHINI HURACAN / AVENTADOR / HURACAN / COUNTACH</h5>
              <p class="card-text">- Hot Wheels 100% ASLI Mattel <br />- Tidak Menjual HotWheels palsu / HotWheels bajakan / Hot Wheels KW <br />- Kondisi HotWheels 100% Masih BARU dalam blister ( Sesuai dengan Foto )<br />- Skala 1:64 ( Kurang Lebih 7 Cm )</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/2/12/14032408/14032408_2f67938d-9164-48ba-a5a6-1b18e6840fc5_469_695.png" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Kartu Yugioh Blue-Eyes White Dragon [Ultra Rare]</h5>
              <p class="card-text">Kondisi: Baru <br />Berat: 10 Gram<br />Kategori: Kartu Remi<br />Etalase: Kartu Yugioh</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function ProtectedPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Barbatos Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/kategori" class="nav-item nav-link active">Kategori</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
      <hr />
      <h1 class="text-center">Welcome to Barbatos Shop</h1>
      <br />
      <br />
      <br />
      <h3 class="text-start">Beberapa Barang Yang dijual disini: </h3>
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/12/21/f896cba7-6f49-4245-9fd5-7838074f99c1.png" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Headset / Headphone Gaming JETE-X GA5 / JETEX GA5</h5>
              <p class="card-text">Mikrofon sangat fleksibel. Arahnya dapat diatur secara bebas sesuai kebutuhan pengguna. Dilengkapi fitur noise reduction, mikrofon gaming headphone GA5 mampu menahan gangguan suara dari luar agar tidak didengarkan lawan dalam permainan. Memastikan mikrofon dapat menghasilkan suara dengan jelas di game atau obrolan online.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/24/24164592/24164592_2d93368b-7bc0-4fac-808e-4a288a8a8606_1567_1045.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">CELANA JOGGER PRIA WISH JOGGER SIDE CAMOUFLAGE JOGGER PANTS ORIGINAL</h5>
              <p class="card-text">- Original <br />- Unisex (Male/Female)<br />- Colour : Khaki<br />- Material cotton cinos</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71y73nqoHqL._AC_SY355_.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Tecware Phantom 87 Key Mechanical Keyboard, RGB led, Outemu Brown Switch</h5>
              <p class="card-text">RGB BACKLIGHTING - Enhance your gaming experience with 18 pre-set configurations on the mechanical keyboard, or create a unique one to match your setup</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/2/12/14032408/14032408_2f67938d-9164-48ba-a5a6-1b18e6840fc5_469_695.png" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Kartu Yugioh Blue-Eyes White Dragon [Ultra Rare]</h5>
              <p class="card-text">Kondisi: Baru <br />Berat: 10 Gram<br />Kategori: Kartu Remi<br />Etalase: Kartu Yugioh</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/8/15/42235959/42235959_72b6a16e-9cae-47fc-95b3-fcf0951d96b6_700_700" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Aspire Minican Kit Pod - Minican Kit 100% Authentic By Aspire</h5>
              <p class="card-text">Aspire MINICAN Pod System, featuring an integrated 350mAh battery, soft-touch rubberized chassis coating, and delivers tasty vapor from the 1.2ohm integrated mesh coil.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.shopee.co.id/file/3bbd44c7dafd06330c8ee4e99db252ea" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Roughneck Dj81 Shiny Black Canvas Jacket</h5>
              <p class="card-text">Size chart Kanvas <br />S Panjang Badan x Lebar Badanx Panjang Tangan 60 cm x 48 cm x 57cm<br />M Panjang Badan x Lebar Badanx Panjang Tangan 63 cm x 51 cm x 59cm<br />L Panjang Badan x Lebar Badanx Panjang Tangan 66 cm x 54 cm x 61cm<br />XL Panjang Badan x Lebar Badanx Panjang Tangan 69 cm x 57 cm x 63cm</p>
            </div>
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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