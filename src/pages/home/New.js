import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";
import "../../assets/css/home.css";

const ComprehensiveWellness = ({ spaceTopClass, spaceBottomClass, dateTime }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth mt-4 pt-4" style={{flexDirection: "row"}}>
        <div className="row align-items-center">
            
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-1">
            <div className="funfact-content funfact-res text-left">
            <h3 className="f-60">Embrace Comprehensive Wellness</h3>
              <p className="pt-4 home">Rezingo encompasses all dimensions of wellness, guiding your journey towards a healthier, more balanced life.</p>
              {/* <div id="cta-waitlist-input" class="mb-12" style={{position:" relative"}}>
                <input type="email" class="mb-2" style={{    paddingTop: "1.5rem",height:"65px", paddingBottom: "1.5rem",paddingRight: "5rem",paddingLeft: "1.5rem"}} placeholder="Enter your email address"/>
   */}
              <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                  Explore Wellness Dimensions
                </Link>
              </div>
             


{/*               
               <div className="slider-btn btn-hover">
                <Link
                  className="animated" sty
                  to={process.env.PUBLIC_URL + "/"}
                >
                  Explore Wellness Dimensions
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-2 order-lg-2">
            <div className="funfact-image text-center">
             
                <img
                  src="/assets/img/product/fashion/35.jpg"
                  alt=""
                  className="img-fluid h-b1"
                
                />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ComprehensiveWellness.propTypes = {
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default ComprehensiveWellness;
