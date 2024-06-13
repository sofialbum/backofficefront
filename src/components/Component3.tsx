interface Props {
  title: string;
  description: string;
}

const Component3 = ({ title, description }: Props) => {
  return (
    <div id="component3" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="row">
            <div className="col-md-4">
              <div className="component3-item">
                <div className="hover-bg">
                  <div className="hover-text">
                  <h4>Lorem Ipsum</h4>
                  </div>
                <img src="/img/02-large.jpg" className="img-fluid" alt=" "/>
                </div> 
              </div>
            </div>
            <div className="col-md-4">
              <div className="component3-item">
                <div className="hover-bg">
                  <div className="hover-text">
                  <h4>Adipiscing Elit</h4>
                  </div>
                <img src="/img/06-large.jpg" className="img-fluid" alt=" "/>
                </div> 
              </div>
            </div>
            <div className="col-md-4">
              <div className="component3-item">
                <div className="hover-bg">
                  <div className="hover-text">
                  <h4>Lorem Ipsum</h4>
                  </div>
                <img src="/img/09-large.jpg" className="img-fluid" alt=" "/>
                </div> 
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;