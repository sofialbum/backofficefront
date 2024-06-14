const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand page-scroll" href="#header">
          React Page
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#body" className="page-scroll nav-link">
                BODY
              </a>
            </li>
            <li className="nav-item">
              <a href="#component1" className="page-scroll nav-link">
                LOREM
              </a>
            </li>
            <li className="nav-item">
              <a href="#component2" className="page-scroll nav-link">
                SED
              </a>
            </li>
            <li className="nav-item">
              <a href="#component3" className="page-scroll nav-link">
                MAURIS
              </a>
            </li>
            <li className="nav-item">
              <a href="#component4" className="page-scroll nav-link">
                AENEAN
              </a>
            </li>
            <li className="nav-item">
              <a href="#component5" className="page-scroll nav-link">
                DUIS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;