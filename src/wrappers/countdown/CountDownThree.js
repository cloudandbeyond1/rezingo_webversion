import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";

const CountDownThree = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-left">
              <h3>Our Eight Pillars of Wellness</h3>
              <p className="pt-4">We are a health and wellness application unlike any other. We curate health and wellness programs from practitioners all over the world to matching to each of our customer’s individual health and wellness needs. A wellness program is an organized and coordinated program that aims to enhance the physical, emotional and mental health risks of a person. Depending on the setting, a wellness program also may promote vocational and spiritual well-being.</p>
              {/* <div className="timer">
                <CountdownTimer date={dateTime} />
              </div> */}
              {/* <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link to={process.env.PUBLIC_URL + "/category"}>
              Dive Deeper</Link>
              </div> */}
              <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                  Dive Deeper
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={process.env.PUBLIC_URL + countDownImage}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownThree.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownThree;
