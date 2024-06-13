import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faGlobe, faNetworkWired } from '@fortawesome/free-solid-svg-icons'



interface Props {
  title: string;
  description: string;
}

const Component2 = ({ title, description }: Props) => {
  return (
    <div id="component2" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <i className='fa'>
          <FontAwesomeIcon icon={faDatabase} />
          </i>
          <div className="service-desc">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-4">
          <i className='fa'>
          <FontAwesomeIcon icon={faGlobe} />
          </i>
          <div className="service-desc">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-4">
          <i className='fa'>
          <FontAwesomeIcon icon={faNetworkWired} />
          </i>
          <div className="service-desc">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Component2;