
import { Link } from "react-router-dom";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const BannerFive = () => {
  return (
    <div className="banner-area hm9-section-padding">
      <div className="container-fluid">
      <SectionTitleSeven

titleText="Features and Offerings"          

positionClass="text-center"

spaceClass="mb-55"

borderClass="no-border"

/>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-banner mb-20" style={{background: "rgb(112 60 162 / 6%)"}}>
                  <Link to={process.env.PUBLIC_URL + "/gadgets"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-21.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-1">
                    <h3>wearable</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/gadgets"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>

                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-banner mb-20" style={{background: "rgb(112 60 162 / 6%)"}}>
                  <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-22.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-1">
                    <h3>marketplace</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-banner mb-20" style={{background: "rgb(112 60 162 / 6%)"}}>
              <Link to={process.env.PUBLIC_URL + "/wellness"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-23.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2" >
               
                <h2>Wellness</h2>
                <h5>Best for your health</h5>
             
                <Link className=""slider-btn btn-hover d-none d-lg-block to={process.env.PUBLIC_URL + "/wellness"}>
                  BOOK NOW
                </Link>
                {/* <div className="slider-btn btn-hover d-none d-lg-block">
        <button className="p-1" style={{backgroundColor:"#703ca2",color:"#fff",width:"100px",border:"none"}} >
        SHOP NOW
        </button>
          <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                  SHOP NOW
                </Link>
      </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="single-banner mb-20" style={{background: "rgb(112 60 162 / 6%)"}}>
                  <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-24.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-2">
                    <h3>health score</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="single-banner mb-20" style={{background: "rgb(112 60 162 / 6%)"}}>
                  <Link to={process.env.PUBLIC_URL + "/cloud-kitchen"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-25.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-2">
                    <h3>cloud kitchen</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/cloud-kitchen"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFive;
