const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Interact
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#body" className="page-scroll">
                Body
              </a>
            </li>
            <li>
              <a href="#compoment1" className="page-scroll">
              Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#compoment2" className="page-scroll">
              Sed Gravida
              </a>
            </li>
            <li>
              <a href="#component3" className="page-scroll">
              Mauris pharetra
              </a>
            </li>
            <li>
              <a href="#component4" className="page-scroll">
              Aenean Sagittis
              </a>
            </li>
            <li>
              <a href="#component5" className="page-scroll">
              Duis Varius
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;