import React from "react";
import İMG from "../assets/asset1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Asset3 from "../assets/asset3.png";
import { Grid } from "@mui/material";

function Contact() {
  return (
    <Grid container className="w-full bg-white rounded-xl overflow-hidden" style={{ boxShadow: '0 0 20px 10px rgba(43, 88, 111, 0.94)' }}>
      <Grid item xs={12} sm={6}>
        <div className="contact"  style={{
        background: 'linear-gradient(90deg, rgba(14, 116, 152, 1) 0%, rgba(59, 100, 168, 1) 35%, rgba(26, 101, 116, 1) 100%)',
      }}>
          <div className="text-center p-0 pt-5 text-white italic" style={{ fontSize: '35px', transform: 'translate(0, 30%)' }}>Haydi Başlayalım</div>
          <img src={İMG} alt="" className="h-[240px] w-1/2 rounded-[20px] block mx-auto transform translate-y-[55%]" />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="social-media">
          <div className="icon-text justify-center items-center flex text-[40px] font-light text-[#19497b] italic transform translate-y-full">
            <h4 className="thrid-text">Sosyal Medya</h4>
          </div>
          <ul className="flex flex-row transform translate-y-[20%] justify-center list-none overflow-hidden static">
            <li className="px-[20px] lg:px-10 text-[28px] left-auto right-auto">
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </li>
            <li className="px-[20px] lg:px-10 text-[28px] left-auto right-auto">
              <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
            </li>
            <li className="px-[20px] lg:px-10 text-[28px] left-auto right-auto">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </li>
            <li className="px-[20px] lg:px-10 text-[28px] left-auto right-auto">
              <FontAwesomeIcon icon={faLinkedinIn} className="linkedln-icon" />
            </li>
          </ul>
          <div style={{ width: "100%" }}>
            <div className="pt-[-350px] pl-[40%]">
              <img src={Asset3} alt="" width={"250px"} />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
export default Contact;
