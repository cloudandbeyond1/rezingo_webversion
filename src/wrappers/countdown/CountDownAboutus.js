import PropTypes from "prop-types";
import clsx from "clsx";
//import { Link } from "react-router-dom";
//import CountdownTimer from "../../components/countdown";

const CountDownAboutus = ({
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
            <div className="funfact-content funfact-res text-center">
              <p style={{fontSize: "20px", fontWeight: "bold"}}>Our Mantra Is Simple, Rezingo - We Care. Our Mission Is To Serve The Society By Providing Right Solutions And Help People To Lead Active And Healthy Lifestyle.</p>
              <div className="timer">
                <p>Rezingo is a Brand that design, Import and manufacture, market fitness-related products, such as exercise equipment, treadmills, elliptical, weights, Fitness Equipment and more. Rezingo often collaborates with athletes, celebrities, and fitness experts to create innovative and effective products that promote healthy and active lifestyles. Rezingo Also Deals with Popular fitness equipment brands include Reebok, Intenza, Kaesun, Gym80, Proiron, Accuniq and Firm.We aim to create corporate wellness, leading to increased productivity.</p>
              </div>
              {/* <div className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                  SHOP NOW
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              {/* <Link to={process.env.PUBLIC_URL + "/shopdetails"}> */}
                <img
                  src={process.env.PUBLIC_URL + countDownImage}
                  alt=""
                  className="img-fluid"
                />
              {/* </Link> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

CountDownAboutus.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownAboutus;
