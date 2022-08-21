function Navbar() {
  return (
    <div className="Navbar">
      <header>
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
      </header>
    </div>
  );
}

export default Navbar;
