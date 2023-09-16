import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom"; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const LoginRegister = () => {
  let { pathname } = useLocation();

  const handleClicknew = () => {
    window.location.href = 'https://member.rezingo.com/home.html';
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      {/* <LayoutOne headerTop="visible"> */}
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Login Register", path: process.env.PUBLIC_URL + pathname }
          ]} 
        /> */}
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <div className="slider-btn btn-hover">
                                <button type="button" onClick={handleClicknew} style={{width:"100%",height:"45px",color:"#fff"}}>
                                Login
                                </button>
                                </div>
                                <br/>                       
                                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                        <div class="borderBottom w-100 ml-5"></div>
                                         <h5 class="px-2  text-muted font-weight-bold text-muted" style={{width:"267px"}}>Or SignIn With</h5>
                                         <div class="borderBottom w-100 mr-5"></div>
                                </div>
                               <div className="social-media">
                                {/* <i class="fa fa-google social-icon"></i> */}
                                <div className="social-icon">
                                <a href="https://google.com/">
                                <img src="/assets/img/icon-img/google.png"  style={{width:"27px",height:"27px"}}/>
                                </a>
                                </div>
                                <div className="social-icon">
                                <a href="https://facebook.com/">
                                <img src="/assets/img/icon-img/facebook.png" style={{width:"27px",height:"27px"}}/>
                                </a>
                                </div>
                                <div className="social-icon">
                                  <a href="https://twitter.com/">
                                <img src="/assets/img/icon-img/twitter.png" style={{width:"37px",height:"37px"}}/>
                                </a>
                               </div>
                                {/* <i class="fa fa-facebook social-icon"></i>
                                 <i class="fa fa-twitter social-icon"></i> */}
                                </div>   
                                <div>
                                  <p></p>
                                  </div>             
                              </div>
                              
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                              />
                              {/* <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div> */}
                              <div className="slider-btn btn-hover">
                                <button type="submit" style={{width:"100%",height:"45px",color:"#fff",border:"none"}}>
                                Register
                                </button>
                                </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </LayoutOne> */}
    </Fragment>
  );
};

export default LoginRegister;
