interface Props {
  title: string;
  description: string;
}

const Component1 = ({title, description}: Props) => {
  return (
    <div id="component1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
          <img src="/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className="about-text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component1;