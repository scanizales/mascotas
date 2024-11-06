import { Link } from "react-router-dom";
import NotFoundImage from "../assets/NotFound.jpg"

import "./notFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <figure><img className="img-NotFound" src={NotFoundImage} alt="Not Found"/></figure>
      <Link className="link itim-regular" to="/">Come back home </Link>
    </div>
  )
}

export default NotFound;