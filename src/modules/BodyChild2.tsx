import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, } from '@fortawesome/free-solid-svg-icons'

const BodyChild2 = () => {
  return (
    <div id="bodychild2" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <i className="fa">
            <FontAwesomeIcon icon={faUser} />
            </i>
            <h3>Tempus eleifend</h3>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
          <div className="col-6">
            <i className="fa">
            <FontAwesomeIcon icon={faLock} />
            </i>
            <h3>Pallentesque</h3>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyChild2;