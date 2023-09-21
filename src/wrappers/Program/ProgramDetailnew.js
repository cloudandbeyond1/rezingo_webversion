import PropTypes from "prop-types";
import clsx from "clsx";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import ImageSliderOne from "../../pages/home/ImageSliderOne";
import Swiper, { SwiperSlide } from "../../components/swiper";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import GoogleMap from "../../components/google-map";
import { useLocation } from "react-router-dom";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import rightImage from "../../assets/images/outdoor.png";
import { useDispatch } from "react-redux";
import play from "../../assets/images/play.png";
import { getProductCartQuantity } from "../../helpers/program";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import profileImage from "../../assets/images/profile.png";
import outdoor from "../../assets/images/outdoor.png";

const Programdetails = ({
  spaceBottomClass,  
  product,cartItems,wishlistItem,compareItem
}) => {
  const dispatch = useDispatch();
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    wishlistItem,
    selectedProductColor,
    selectedProductSize
  );
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-details-content")}>
      <div className="container-fluid justify-content-center d-flex">
      <div className="container-fluid">
  
  <div className="row align-items-center d-flex bg-light">
    <div className="col-xl-6 p-5 justify-content-center d-flex">
      <div style={{width:"55%"}}>
<h2 className="text-left" style={{fontSize: "36px",
  fontWeight: "600"}}>{product.name}

  </h2>
  {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              ENROLL NOW
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  dispatch(addToCart({
                    ...product,
                    quantity: quantityCount,
                    selectedProductColor: selectedProductColor ? selectedProductColor : product.selectedProductColor ? product.selectedProductColor : null,
                    selectedProductSize: selectedProductSize ? selectedProductSize : product.selectedProductSize ? product.selectedProductSize : null
                  }))
                }
                disabled={productCartQty >= productStock}
              >
                {" "}
                ENROLL NOW{" "}
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
          <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => dispatch(addToWishlist(product))}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
          <div className="pro-details-compare">
            <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={() => dispatch(addToCompare(product))}
            >
              <i className="pe-7s-shuffle" />
            </button>
          </div>
        </div>
      )}
{/* <p className="text-left">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p> */}
{/* <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
             Play Video  
              </Link>
            </div> */}
            
            </div>
    </div>
    <div className="col-xl-6 pr-0">
    <img
                      src={product.detailimage}
                      className="img-fluid"
                      alt=""
                    />
    </div>
  </div>
</div>
      {/* <div className="sec">
		<img src="images/01.png"/>
		<div className="slide-img-pos">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<p className="slide-img-pos-p1">Experience based search engine.</p>
						<p className="slide-img-pos-p2">AI. Real Estate.<br/>More Possibilities.</p>
						<button>play video</button>
					</div>
					<div className="col-lg-6">
					</div>
				</div>
			</div>	
		</div>
	
	</div> */}
    
      </div>

<div className="container">
<div className="row justify-content-center d-flex my-5 mx-0 py-3">
<p className="slide-img-pos-p1">How it works</p>
<p className="slide-img-pos-p2">It’s easy to get started</p>


				<div class="col-lg-3">
					<p class="slide-img-pos-p3">1. Set your decision criteria</p>
					<p class="slide-img-pos-p4">
						Tell us the key factors that matter
						to your lifestyle, the reason to buy 
						and AI will forecast the properties 
						that match your lifestyle 
						<a>Get Started</a>
					</p>
				</div>
				<div class="col-lg-3">
					<p class="slide-img-pos-p3">2. Smart Offer</p>
					<p class="slide-img-pos-p4">
						We have developed a stress free
						process to make an offer online with 
						minimal paperwork using AI.
					</p>
				</div>
				<div class="col-lg-3">
					<p class="slide-img-pos-p3">3. Mortgage Approval</p>
					<p class="slide-img-pos-p4">
						Using AI, we have automated 
						loan approval, insurance and
						legal review process. Digitally 
						sign contracts and complete 
						closing process		
					</p>
				</div>
					<div class="col-lg-3">
					<p class="slide-img-pos-p3">4. Virtual Neighborhood</p>
					<p class="slide-img-pos-p4">We will send you a <span>welcome packet</span>
						containing all the essentials before 
						and after your move. From moving 
						your cable to updating contact info
						we have it all covered for you.
						
					</p>
				</div>
			
                <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px",textTransform:"uppercase"}}
                to={process.env.PUBLIC_URL + "/"}
              >
                See how it works
              </Link>
            </div>            

</div>
</div>
<div className="description-review-area bg-light pt-60 mb-80 pb-100">
<div className="container-fluid pb-5">
        <div className="description-review-wrapper">
        <Tab.Container defaultActiveKey="About">
            
<Nav variant="pills" className="justify-content-center">
    <div style={{backgroundColor: "#f4f4f4 !important"}}  className="description-review-topbar">
            <Nav.Item>
                <Nav.Link eventKey="About" style={{padding:"16px 28px"}}>About the program</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="Practitioners" style={{padding:"16px 28px"}}>Practitioners</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="Schedule" style={{padding:"16px 28px"}}>Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Ingredients" style={{padding:"16px 28px"}}>Ingredients</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="Journey" style={{padding:"16px 28px"}}>Supplement Journey</Nav.Link>
              </Nav.Item>
              </div>
            </Nav>
            
            <Tab.Content className="description-review-bottom">  
            <Tab.Pane eventKey="About">
            <div className="row bg-light pb-5">
<div className="container">
            <div className="col-xl-12 p-5 justify-content-center align-items-center d-flex">
      <div>
{/* <h2 className="text-left" style={{fontSize: "36px",
  fontWeight: "600"}}>Experience based search engine.

  </h2> */}
<p className="text-left">Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker.
               For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.</p>
               <div style={{display:"flex"}}>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4" style={{marginRight:"10px"}}>
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
            Read More
              </Link>
            </div>
            <div className="video-popup-2" style={{marginTop:"17px"}}>
          <button  style={{ border: "none", backgroundColor: "#f8f9fa"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
        </div>
        </div>

            </div>
    </div>
    {/* <div className="col-xl-6 pr-0">
    <div class="tab-img-pos">
					<p class="slide-img-pos-p1">PREFERENCE BASED SEARCH</p>
					<p class="slide-img-pos-p2">Thinking about buying</p>
					<p class="slide-img-pos-p4">
					Based on your affordability AI will line up mortgage 
					providers and help you get the best rates possible. 
					AI will also help you complete the required contracts 
					and get you pre-appoved instantly.	
					</p>
					<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
             Get Started
              </Link>
            </div>
					
				</div>
    </div> */}
  </div></div>
                </Tab.Pane> 
            <Tab.Pane eventKey="Practitioners">
            <div className="container">
            <div className="row bg-light align-items-center d-flex pb-5 ">

<div className="col-xl-6 p-5 justify-content-center d-flex">
<div>
<img
                      src={profileImage}
                      className="img-fluid"
                      alt=""
                    />
</div>
</div>
<div className="col-xl-6 pr-0">
  <h3>JERMAINE JOHNSON</h3>
<p className="text-left">London born and raised, Jermaine is driven by the belief that you make your own opportunities. From working as a professional dancer through building a brand as a fitness coach and now in his dream role at Rezingo, movement has always been at the heart of everything he does. But this isn’t just going with the flow—this is movement powered by a hunger to hustle. It’s about developing the determination and skill to navigate obstacles and always keep pushing forwards. With his focus and natural warmth, he helps people step out of their comfort zone but in tune with their own bodies—bringing them together to train hard whilst growing in confidence.
</p>
{/* <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
  <Link
    className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
    to={process.env.PUBLIC_URL + "/"}
  >
 Play Video  
  </Link>
</div> */}
</div>
</div>
</div></Tab.Pane> 
            <Tab.Pane eventKey="Schedule">
              <div className="container">
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
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
          </Tab.Container></div>
            </Tab.Pane> 
            <Tab.Pane eventKey="Ingredients">
            <div className="row bg-light pb-5">

<div className="col-xl-6 p-5 justify-content-center d-flex">
<div style={{width:"55%"}}>
<h2 className="text-left" style={{fontSize: "36px",
fontWeight: "600"}}>Experience based search engine.

</h2>
<p className="text-left">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
  <Link
    className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
    to={process.env.PUBLIC_URL + "/"}
  >
 Play Video  
  </Link>
</div></div>
</div>
<div className="col-xl-6 pr-0">
<div class="tab-img-pos">
        <p class="slide-img-pos-p1">PREFERENCE BASED SEARCH</p>
        <p class="slide-img-pos-p2">Thinking about buying</p>
        <p class="slide-img-pos-p4">
        Based on your affordability AI will line up mortgage 
        providers and help you get the best rates possible. 
        AI will also help you complete the required contracts 
        and get you pre-appoved instantly.	
        </p>
        <div className="slider-btn funfact-btn funfact-btn-violet btn-hover mt-4">
  <Link
    className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
    to={process.env.PUBLIC_URL + "/"}
  >
 Get Started
  </Link>
</div>
        {/* <a>read more</a> */}
    </div>
</div>
</div></Tab.Pane> 
            <Tab.Pane eventKey="Journey">
            <div className="row bg-light pb-5">

<div className="col-xl-6 p-5 justify-content-center d-flex">
<div style={{width:"55%"}}>
<h2 className="text-left" style={{fontSize: "36px",
fontWeight: "600"}}>Experience based search engine.

</h2>
<p className="text-left">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
  <Link
    className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
    to={process.env.PUBLIC_URL + "/"}
  >
 Play Video  
  </Link>
</div></div>
</div>
<div className="col-xl-6 pr-0">
<div class="tab-img-pos">
        <p class="slide-img-pos-p1">PREFERENCE BASED SEARCH</p>
        <p class="slide-img-pos-p2">Thinking about buying</p>
        <p class="slide-img-pos-p4">
        Based on your affordability AI will line up mortgage 
        providers and help you get the best rates possible. 
        AI will also help you complete the required contracts 
        and get you pre-appoved instantly.	
        </p>
        <div className="slider-btn funfact-btn funfact-btn-violet btn-hover mt-4">
  <Link
    className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
    to={process.env.PUBLIC_URL + "/"}
  >
 Get Started
  </Link>
</div>
        {/* <a>read more</a> */}
    </div>
</div>
</div></Tab.Pane> 
            </Tab.Content>
            </Tab.Container></div>
            {/* <div class="tab-sec">
			<div class="container">
			  <ul class="nav nav-pills">
				<li class="active"><a data-toggle="pill" href="#tab1">buying</a></li>
				<li class=""><a data-toggle="pill" href="#tab2">selling</a></li>
				<li class=""><a data-toggle="pill" href="#tab3">renting</a></li>
				<li class=""><a data-toggle="pill" href="#tab4">investing</a></li>
				<li class=""><a data-toggle="pill" href="#tab5">VIRTUAL NEIGHBORHOOD</a></li>
			  </ul>
			</div>
		</div> */}
            </div></div>

<div className="container-fluid my-5">
{/* <div class="tab-sec">
			<div class="container">
			  <ul class="nav nav-pills">
				<li class="active"><a data-toggle="pill" href="#tab1">buying</a></li>
				<li class=""><a data-toggle="pill" href="#tab2">selling</a></li>
				<li class=""><a data-toggle="pill" href="#tab3">renting</a></li>
				<li class=""><a data-toggle="pill" href="#tab4">investing</a></li>
				<li class=""><a data-toggle="pill" href="#tab5">VIRTUAL NEIGHBORHOOD</a></li>
			  </ul>
			</div>
		</div> */}
        {/* <div class="tabbable-panel">
				<div class="tabbable-line">
					<ul class="nav nav-tabs ">
						<li class="active">
							<a href="#tab_default_1" data-toggle="tab">
Company or Individual </a>
						</li>
						<li>
							<a href="#tab_default_2" data-toggle="tab">
Report title & Category </a>
						</li>
						<li>
							<a href="#tab_default_3" data-toggle="tab">
Your Reports </a>
						</li>
          <li>
							<a href="#tab_default_4" data-toggle="tab">
Documents </a>
						</li>
            <li>
							<a href="#tab_default_5" data-toggle="tab">
T&C </a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="tab_default_1">
							<p>
 Tab 1.
							</p>
							<p>
								lorem
							</p>
							</div>
						<div class="tab-pane" id="tab_default_2">
							<p>
Tab 2.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>

						</div>
						<div class="tab-pane" id="tab_default_3">
							<p>
Tab 3.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div>
           <div class="tab-pane" id="tab_default_4">
							<p>
Tab 4.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div><div class="tab-pane" id="tab_default_5">
							<p>
Tab 5.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div>
					</div>
				</div>
			</div> */}

          </div>
      {/* <div className="justify-content-center d-flex my-5">
                      <img
                        src={"https://lyma.life/assets/images/supplement/hero-sub-health@2x.webp"}
                        style={{width:"60%"}}
                        alt=""
                      /></div> */}



{/* 
<div className="container-fluid">
  
  <div className="row align-items-center d-flex bg-light">
  <div className="col-xl-6 pr-0">
    <img
                      src={outdoor}
                      className="img-fluid"
                      alt=""
                    />
    </div>
    <div className="col-xl-6 p-5 justify-content-center d-flex">
      <div style={{width:"55%"}}>
<h2 className="text-left" style={{fontSize: "36px",
  fontWeight: "600"}}>Experience based search engine.

  </h2>
<p className="text-left">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
             Play Video  
              </Link>
            </div></div>
    </div>
    
  </div>
</div> */}


<div className="myaccount-area pb-80 pt-20">
          <div className="container">
            <div className="row">
            <h3 className="text-center" style={{fontWeight:"500",fontSize:"28px"}}>Your Questions about REZINGO Skincare</h3>
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      <span>1 .</span>What is the difference between Pre-Qualification and Pre-Approval?
                      </Accordion.Header>
                      <Accordion.Body>
                      Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker. For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="1" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                          <span>2 .</span> How can I get Pre-Approved instantly?
                      </Accordion.Header>
                      <Accordion.Body>
                      Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker. For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                          <span>3 .</span> Can I digitally sign the documents online?
                      </Accordion.Header>
                      <Accordion.Body>
                      Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker. For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <ImageSliderOne />
    </div>
  );
};

Programdetails.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default Programdetails;



//218*300