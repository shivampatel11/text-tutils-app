import react from "react";
import { Link } from "react-router-dom";
import "./nav.css"
function myfunc(props) {
  return (
    <div className="container">
      <div>
        <Link to="/" className="title" >{props.title}</Link>
      </div>

      <div>
            < Link to="/home" className="homes">Home</Link>
            <Link to="/about" className="homes" >{props.aboutus}</Link>
      </div>
    </div>
  )

}

export default myfunc