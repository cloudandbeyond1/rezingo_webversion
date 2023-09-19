import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import GoogleMap from "../../components/google-map";
import { useLocation } from "react-router-dom";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import rightImage from "../../assets/images/outdoor.png";

import play from "../../assets/images/play.png";
const Programdetails = ({
  spaceBottomClass,  
  product
}) => {
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-area")}>
      <div className="container-fluid justify-content-center d-flex">
      <div className="container-fluid">
  
  <div className="row align-items-center d-flex bg-light">
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
    <img
                      src={rightImage}
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
        <Tab.Container defaultActiveKey="Overview">
            
<Nav variant="pills" className="justify-content-center">
    <div style={{backgroundColor: "#f4f4f4 !important"}}  className="description-review-topbar">
            <Nav.Item>
                <Nav.Link eventKey="Overview" style={{padding:"16px 28px"}}>About the program</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="Schedule" style={{padding:"16px 28px"}}>Practitioners</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="Reviews" style={{padding:"16px 28px"}}>Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Schedule1" style={{padding:"16px 28px"}}>Ingredients</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link eventKey="Reviews1" style={{padding:"16px 28px"}}>Supplement Journey</Nav.Link>
              </Nav.Item>
              </div>
            </Nav>
            
            <Tab.Content className="description-review-bottom">  
            <Tab.Pane eventKey="Overview">
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
					<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
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
  </div>
                </Tab.Pane> 
            <Tab.Pane eventKey="Schedule">
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
        <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
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
            <Tab.Pane eventKey="Reviews">
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
        <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
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
            <Tab.Pane eventKey="Schedule1">
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
        <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
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
            <Tab.Pane eventKey="Reviews1">
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
        <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
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


<div className="container-fluid">
  
  <div className="row align-items-center d-flex bg-light">
  <div className="col-xl-6 pr-0">
    <img
                      src={rightImage}
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
</div>


<div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
            <h4 className="text-center">FAQ</h4>
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      <span>1 .</span>What is the difference between Pre-Qualification and Pre-Approval?
                      </Accordion.Header>
                      <Accordion.Body>
                          Lorem ipsum
                      </Accordion.Body>
                    </Accordion.Item>

 
                    <Accordion.Item eventKey="1" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                          <span>2 .</span> How can I get Pre-Approved instantly?
                      </Accordion.Header>
                      <Accordion.Body>
                          Lorem ipsum
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                          <span>3 .</span> Can I digitally sign the documents online?
                      </Accordion.Header>
                      <Accordion.Body>
                          Lorem ipsum
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
 
  
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