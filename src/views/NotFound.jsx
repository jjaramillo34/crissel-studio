import React from "react";
import { Link } from "react-router-dom";
//import image404 from "../images/404.png";

const NotFound = () => {
    return (
        <div className="not-found">
            
            <p>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    );
}

export default NotFound;

//<img src={image404} alt="404" />