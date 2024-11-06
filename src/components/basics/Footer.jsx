import "./footer.css";
import imageFooter from "../../assets/icons/img-footer.png";

export default function Footer() {
  return (
    <footer className="footer-container">
            <figure className="footer-image">          
              <img className="img-footer" src={imageFooter}/>
            </figure>     
            <h3>FelineCare</h3>
            <h4>Copyright © 2024</h4>
    </footer>
  )
}