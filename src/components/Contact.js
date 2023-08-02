import React from "react";
import İMG from "../assets/intro.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="social">
      <div className="item">
        <div className="contact">
          <div className="first-text">Çekim Yapmaya Başlayalım Mı</div>
          <img src={İMG} alt="" className="image" />
        </div>
        <div className="social-media">
          <div>
            <h4 className="thrid-text">Sosyal Medya</h4>
          </div>
          <ul className="social-media-icon">
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contact;
