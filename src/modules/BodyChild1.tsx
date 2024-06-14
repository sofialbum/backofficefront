import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faDownload, } from '@fortawesome/free-solid-svg-icons'


const BodyChild1 = () => {
  return (
    <div id="bodychild" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <i className="fa">
              <FontAwesomeIcon icon={faCloud} />
            </i>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
          <div className="col-6">
            <i className="fa">
            <FontAwesomeIcon icon={faDownload} />
            </i>
            <h3>Dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyChild1;