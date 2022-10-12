import "./404.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error_container">
      <h1 className="error_title"> 404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2>We can't find that page</h2>
        <p className="error_message">
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf. 
        </p>
        <button className="back_Home">
          <Link  to='/'>Back Home</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
