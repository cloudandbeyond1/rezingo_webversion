import PropTypes from "prop-types";
import clsx from "clsx";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import GoogleMap from "../../components/google-map";
import { useLocation } from "react-router-dom";

const TabAboutUs = ({
  spaceBottomClass,  
  image
}) => {
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-area", spaceBottomClass)}>
      <div className="container-fluid">
        <Tab.Container defaultActiveKey="newArrival">
          <Nav
            variant="pills"
            className={clsx("product-tab-list-2 mb-60 mt-35")}
          >
            
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>COMPANY</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>CONTACT</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div class="video-popup-2 pb-3">
                <div
                  class="video-popup-2__right bg-img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/assets/img/banner/deal-9.jpg"
                    })`,
                  }}
                ></div>
                <div class="video-popup-2__left bg-img">
                  <div class="video-popup-2__content">
                    <h2  class="title mb-30">
                      How It All Started
                    </h2>

                    <div>
                      <p>
                        Rezingo is a Brand that design, Import and manufacture,
                        market fitness-related products, such as exercise
                        equipment, treadmills, elliptical, weights, Fitness
                        Equipment and more. Rezingo often collaborates with
                        athletes, celebrities, and fitness experts to create
                        innovative and effective products that promote healthy
                        and active lifestyles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            

              <div class="row" 
                style={{ backgroundColor: "#222529", padding: "100px" }}
              >
                <div class="col-lg-12 justify-content-center d-flex text-center py-5">
                  <div class="section-title-8 text-center mb-55 no-border">
                    <h2 style={{ color: "white"}}>
                      OUR MISSION
                    </h2>
                    <p
                      style={{
                        color: "white",
                        fontSize: "18px",
                        lineHeight: "1.5em",
                        marginTop:"25px"
                      }}
                    >
                      We uses technology and design to connect the world through
                      fitness, empowering people to be the best version of
                      themselves anywhere, anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div class="video-popup-2">
                <div class="video-popup-2__left bg-img">
                  <div class="video-popup-2__content">
                    <h2  class="title mb-30">
                      Rezingo
                    </h2>

                    
                    <div>
                      <p>
                        Millions of Members use our platform to connect, bond,
                        inspire and grow stronger together. Through our
                        immersive software like the live Leaderboard,
                        beautifully designed hardware, addictive classes,
                        empowering instructors.
                      </p>
                      
                    </div>
                  </div>
                  
                </div>
                <div
                  class="video-popup-2__right bg-img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/assets/img/bg/bg-10.jpg"
                    })`,
                  }}
                ></div>
              </div>

              <div class="video-popup-2">
                <div
                  class="video-popup-2__right bg-img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/assets/img/bg/bg-11.jpg"
                    })`,
                  }}
                ></div>
                <div class="video-popup-2__left bg-img">
                  <div class="video-popup-2__content">
                    <h2 class="title mb-30">
                      A New Concept In <br /> Fitness
                    </h2>


                    <div>
                      <p>
                        We use a combination of technology, content and
                        best-in-class instructors to empower our millions-strong
                        community through fitness. Our library of classes with
                        curated music is designed to keep you coming back. You
                        can reach your goals at home, on your own time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div>
                <div className="contact-area pb-100">
                  <div className="container-fluid">
                    <div className="custom-row-2">
                      <div className="col-12 col-lg-4 col-md-5">
                        <div className="contact-info-wrap">
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-phone" />
                            </div>
                            <div className="contact-info-dec">
                              <p>+91 9842015786</p>
                              <p>+91 9842015786</p>
                            </div>
                          </div>
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-globe" />
                            </div>
                            <div className="contact-info-dec">
                              <p>
                                <a href="mailto:yourname@email.com">
                                info@rezingo.com
                                </a>
                              </p>
                              <p>
                                <a href="https://yourwebsitename.com">
                                info@rezingo.com
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="single-contact-info">
                            <div className="contact-icon">
                              <i className="fa fa-map-marker" />
                            </div>
                            <div className="contact-info-dec">
                              <p>#9 , V.S.Nagar,</p>
                              <p>Thiruvanaikoil,Trichy, Tamil Nadu - 620005.</p>
                            </div>
                          </div>
                          <div className="contact-social text-center">
                            <h3>Follow Us</h3>
                            <ul>
                              <li>
                                <a href="//facebook.com">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="//pinterest.com">
                                  <i className="fa fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a href="//thumblr.com">
                                  <i className="fa fa-pinterest-p" />
                                </a>
                              </li>
                              <li>
                                <a href="//vimeo.com">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="//twitter.com">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-8 col-md-7">
                        <div className="contact-form">
                          <div className="contact-title mb-30">
                            <h2>Get In Touch</h2>
                          </div>
                          <form className="contact-form-style">
                            <div className="row">
                              <div className="col-lg-6">
                                <input
                                  name="name"
                                  placeholder="Name*"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-6">
                                <input
                                  name="email"
                                  placeholder="Email*"
                                  type="email"
                                />
                              </div>
                              <div className="col-lg-12">
                                <input
                                  name="subject"
                                  placeholder="Subject*"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-12">
                                <textarea
                                  name="message"
                                  placeholder="Your Message*"
                                  defaultValue={""}
                                />
                                <div className="slider-btn btn-hover">
                                <button className="submit" type="submit">
                                  SEND
                                </button>
                                </div>

                              </div>
                            </div>
                          </form>
                          <p className="form-message" />
                        </div>
                      </div>
                    </div>
                    <div className="contact-map mb-10 pt-5">
                      <GoogleMap lat={47.444} lng={-122.176} />
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>

      
    </div>
  );
};

TabAboutUs.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabAboutUs;



//218*300