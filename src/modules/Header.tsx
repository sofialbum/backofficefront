
const Header = () => {
  return (
    <header id='header'>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="col-md-8 offset-md-2 intro-text">
              <h1>Header</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
              <a
                  href="#body"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  
    
  )
}

export default Header;