import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-light bg-light py-3">
        <div class="container-fluid">
          <a class="navbar-brand ms-2 ms-lg-5" href="/">
            React-testweb
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item mx-md-2 mx-lg-2 mx-xl-4 mx-xxl-4">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item mx-md-2 mx-lg-2 mx-xl-4 mx-xxl-4">
                <a class="nav-link " href="">
                  Services
                </a>
              </li>
              <li class="nav-item mx-md-2 mx-lg-2 mx-xl-4 mx-xxl-4">
                <a class="nav-link " href="">
                  Download
                </a>
              </li>
              <li class="nav-item mx-md-2 mx-lg-2 mx-xl-4 mx-xxl-4">
                <a class="nav-link " href="">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0 mx-md-5">
              <li class="nav-item">
                <a class="btn btn-dark " href="">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="p-4 p-md-5 mb-4 text-bg-dark">
        <div class="col-md-6 px-0 heroheading-container">
          <h1 class="display-4">We thrive for uniqueness.</h1>
          <p class="lead my-3">
            We create the best digital works and turn the dreams of many people
            into reality. Combined with state-of-the-art, high-end technology
            and a warranty policy that has never been dared before.
          </p>
          <p class="lead mb-0">
            <a class="btn btn-secondary px-5" href="/join-us">
              Join Us
            </a>
          </p>
        </div>
      </div>

      <div class="container text-center">
        <div class="row row-cols-3">
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;