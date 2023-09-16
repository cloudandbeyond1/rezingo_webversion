import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";


const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  return (
    <footer className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass )}  style={{backgroundColor:"#fbfbfb"}}>
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/logorezingo.png"
              spaceBottomClass="mb-30"
           
            />
          </div>
          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>Quick LINKS</h3> 
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Store location
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Orders tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}



          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="foot-align">
              <div className="footer-title">
                <h3>Quick LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Blog</Link>
                  </li>   
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                  </li> 
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Privacy Policy</Link>
                  </li>

                  <li style={{width:"142px"}}> 
                    <Link to={process.env.PUBLIC_URL + "#/"}>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-5 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3> CONTACT INFORMATION</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                  <div class="single-contact-info" style={{display: "flex",alignItems: "center"}}>
              <div class="contact-icon">
                <i class="fa fa-phone" style={{fontSize: "20px", lineHeight: "26px",display: "inline-block", width: "28px", height: "28px",  transition: "all 0.3s ease 0s",textAlign: "center"}}></i>
                </div>
                <div class="contact-info-dec">
                  <p style={{ marginBottom: "0px", marginLeft: "14px"}}>+91 9842015786</p>
                
                  </div>
                  </div>
                  </li>
                  <li>
                  <div class="single-contact-info" style={{display:"flex",alignItems:"center"}} >
                    <div class="contact-icon">
                      <i class="fa fa-globe" style={{fontSize: "20px", lineHeight: "26px",display: "inline-block", width: "28px", height: "28px",  transition: "all 0.3s ease 0s",textAlign: "center"}}></i>
                      </div>
                      <div class="contact-info-dec">
                        <p style={{ marginBottom: "0px", marginLeft: "14px"}}><a href="mailto:yourname@email.com" >info@rezingo.com</a></p>
                      
                        </div>
                        </div>
                 
                  </li>
                  <li>
                  <div class="single-contact-info" style={{display:"flex",alignItems:"center"}}>
                    <div class="contact-icon">
                      <i class="fa fa-map-marker" style={{fontSize: "20px", lineHeight: "26px",display: "inline-block", width: "28px", height: "28px",  transition: "all 0.3s ease 0s",textAlign: "center"}}></i>
                      </div>
                      <div class="contact-info-dec">
                        <p style={{ marginBottom: "0px", marginLeft: "14px"}}>#9 , V.S.Nagar,</p>
                        <p style={{marginLeft:"14px"}}>Thiruvanaikoil,Trichy, Tamil Nadu - 620005.</p>
                        </div>
                        </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-3 col-sm-6"
            }`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
