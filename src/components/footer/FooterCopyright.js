import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div className={clsx("copyright", spaceBottomClass, colorClass)}>
      <div className="footer-logo" style={{marginTop:"11px"}}>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={process.env.PUBLIC_URL + footerLogo} />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://rezingo.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Rezingo
        </a>
        .<br /> All Rights Reserved
      </p>
      <div class="footer-social"  style={{marginLeft:"-10px"}}>
        <ul style={{display:"flex"}}>
          <li style={{margin:"10px"}}>
            <a href="//www.facebook.com">
              <i class="fa fa-facebook"></i>
              </a>
              </li>
              <li style={{margin:"10px"}}>
                <a href="//www.instagram.com">
                  <i class="fa fa-instagram"></i>
                  </a>
                  </li>
                  <li style={{margin:"10px"}}>
                    <a href="//www.pinterest.com">
                      <i class="fa fa-pinterest-p">
                        </i>
                        </a>
                        </li>
                        <li style={{margin:"10px"}}>
                          <a href="//www.twitter.com">
                            <i class="fa fa-twitter"></i>
                            </a>
                            </li>
                            <li style={{margin:"10px"}}>
                              <a href="//www.linkedin.com">
                                <i class="fa fa-linkedin"></i>
                                </a>
                                </li>
                                </ul>
                                </div>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
