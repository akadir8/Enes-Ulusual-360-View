import React from "react";
import İMG from "../assets/intro-removebg-preview (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="section social">
      <div className="item">
        <div className="contact">
          <div className="first-text">Çekim Yapmaya Başlayalım Mı</div>
          <img src={İMG} alt="" className="image" />
        </div>
        <div className="social-media">
          <div className="icon-text">
            <h4 className="thrid-text">Sosyal Medya</h4>
          </div>
          <ul className="social-media-icon">
            <li>
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} className="facebook-icon"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} className="linkedln-icon"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contact;
