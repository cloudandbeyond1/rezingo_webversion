

import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import "../../assets/css/program.css";
import SectionTitle from "../../components/section-title/SectionTitle";
import ModalVideo from "react-modal-video";

const ProgramDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  const [modalStatus, isOpen] = useState(false);
  const accordions = document.querySelectorAll(".accordion");
    for (const accordion of accordions) {
      const panels = accordion.querySelectorAll(".accordion-panel");
      for (const panel of panels) {
        const head = panel.querySelector(".accordion-header");
        head.addEventListener('click', () => {
          for (const otherPanel of panels) {
            if (otherPanel !== panel) {
              otherPanel.classList.remove('accordion-expanded');
            }
          }
          panel.classList.toggle('accordion-expanded');
        });
      }
    }
  return (
    <div className={clsx("description-review-area bg-light pt-60 mb-80", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="Overview">
            <Nav variant="pills" className="description-review-topbar">
            <Nav.Item>
                <Nav.Link eventKey="Overview" style={{padding:"16px 28px"}}>Overview</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="Schedule" style={{padding:"16px 28px"}}>Schedule</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="Reviews" style={{padding:"16px 28px"}}>Reviews(2)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">   
            <Tab.Pane eventKey="Overview">
               Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker.
               For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.


               <div className="cardwd mt-4">
                  <div className="row p-4">
                    <div className="col-xl-4">
                      <div className="card card-body bxshadow schedule"  style={{height: "179px",marginBottom:"10px"}}>
                        <h4 className="card-title font-size-16 mt-0">
                          Practitioners
                        </h4>
                        <div className="row">
                          <div className="card-image-circle">
                            <img
                              src="/assets/img/team/thumb-11.png"
                              className="rounded-circle avatar-xs mx-2"
                              salt="user-pic" style={{width: "12%"}}
                            />
                            <p className="card-text" style={{marginLeft: "15px"}}>Linda Hall</p>
                          </div>
                        </div>
                        
                          <div className="row mt-2">
                          <div className="card-image-circle">
                            <img
                              src="/assets/img/team/thumb-11.png"
                              className="rounded-circle avatar-xs mx-2"
                              alt="user-pic" style={{width: "12%"}}
                            />
                            <p className="card-text" style={{marginLeft: "15px"}}>Andrew</p>
                          </div>
                        </div>
                        <a href="#" className="fnsz mt-2">
                          View more
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card card-body bxshadow schedule"  style={{height: "179px",marginBottom:"10px"}}>
                        <h4 className="card-title font-size-16 mt-0">Levels</h4>
                        <p className="card-text">
                          Level 1{" "}
                          <span className="badge badge-primary mx-2 pt-1">
                            Easy
                          </span>
                        </p>
                        <p className="card-text">
                          Level 2{" "}
                          <span className="badge badge-info mx-2 pt-1">
                            Moderate
                          </span>
                        </p>
                        <p className="card-text">
                          Level 3{" "}
                          <span className="badge badge-danger mx-2 pt-1">
                            Difficult
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card card-body bxshadow schedule"  style={{height: "179px"}}>
                        <h4 className="card-title font-size-16 mt-0">Weeks</h4>
                        <p className="card-text">Week 1 | 4 Days | 3 Classes</p>
                        <p className="card-text">Week 2 | 5 Days | 5 Classes</p>
                        <p className="card-text">Week 3 | 6 Days | 7 Classes</p>
                      </div>
                    </div>
                  </div>
                </div>
             
            {/* <div className="d-flex col-lg-12 col-md-6">
            <div class="col-lg-6 col-md-6">
              <div class="card card-body bxshadow schedule">
                  <h3 class="card-title font-size-16 mt-0">Practitioners</h3>
                    <div class="row d-flex">
            <img src="https://elstar.themenate.net/img/avatars/thumb-10.jpg" class="rounded-circle avatar-xs mx-2" alt="user-pic" style={{width:"58px",height:"37px"}}/>
                                                        <p class="pt-1">Linda Hall</p>
                                                    </div>
                                                    <div class="row mt-2">
                                                        <img src="https://elstar.themenate.net/img/avatars/thumb-10.jpg" class="rounded-circle avatar-xs mx-2" alt="user-pic" style={{width:"58px",height:"37px"}}/>
                                                        <p class="pt-1">Andrew</p>
                                                    </div>
                                                        <a href="#" class="fnsz mt-2">View more</a>
                                                    </div>
                                                </div>


                                                <div class="col-lg-6 col-md-6">
              <div class="card card-body bxshadow schedule">
                  <h3 class="card-title font-size-16 mt-0">Practitioners</h3>
                    <div class="row d-flex">
            <img src="https://elstar.themenate.net/img/avatars/thumb-10.jpg" class="rounded-circle avatar-xs mx-2" alt="user-pic" style={{width:"58px",height:"37px"}}/>
                                                        <p class="pt-1">Linda Hall</p>
                                                    </div>
                                                    <div class="row mt-2">
                                                        <img src="https://elstar.themenate.net/img/avatars/thumb-10.jpg" class="rounded-circle avatar-xs mx-2" alt="user-pic" style={{width:"58px",height:"37px"}}/>
                                                        <p class="pt-1">Andrew</p>
                                                    </div>
                                                        <a href="#" class="fnsz mt-2">View more</a>
                                                    </div>
                                                </div>
                                                </div> */}
 
              </Tab.Pane>           
              <Tab.Pane eventKey="Schedule">
              <Tab.Container defaultActiveKey="additionalInfo">
            <Nav variant="pills" className="description-review-topbar1">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Week 1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Week 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Week 3</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productweek4">Week 4</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 2</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 3</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 4</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 5</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 6</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 7</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 8</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 9</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 10</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 11</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 12</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 13</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 14</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 15</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 16</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 17</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 18</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 19</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 20</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 21</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productweek4">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 22</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 23</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 24</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 25</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 26</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 27</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 21</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
              </Tab.Pane>             
              <Tab.Pane eventKey="Reviews">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                {/* <input type="submit" defaultValue="Submit" /> */}
                                <div className="slider-btn btn-hover d-lg-block mt-25">
                                      <button style={{backgroundColor:"#703ca2",color:"#fff",width:"100%",padding:"16px 28px",border:"none"}}> Submit </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <ModalVideo
          channel="youtube"
          isOpen={modalStatus}
          videoId="feOScd2HdiU"
          onClose={() => isOpen(false)}
        />
        </div>
      </div>
      {/* <SectionTitle
       titleText="Schedule"
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
      <div className="container mt-5">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="additionalInfo">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Week 1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Week 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Week 3</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productweek4">Week 4</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 2</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 3</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 4</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 5</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 6</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 7</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 8</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 9</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 10</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 11</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 12</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 13</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 14</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 15</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 16</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 17</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 18</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 19</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 20</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 21</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productweek4">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 22</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 23</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 24</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 25</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 26</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button onClick={() => isOpen(true)} style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 27</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 21</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div> */}
     
    </div>
  );
};

ProgramDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProgramDescriptionTab;
