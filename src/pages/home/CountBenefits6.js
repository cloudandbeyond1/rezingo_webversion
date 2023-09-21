import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/ourblog.css";
const CountBenefits6 = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth">
        <div className="row align-items-center">
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-1">
          <div className="card">
            <div className="funfact-content funfact-res text-left paddingnew">
              <h3 style={{fontWeight:"500",fontSize:"36px"}}>The REZINGO Supplement Starter Kit</h3>
              <p className="pt-4 ptag" style={{fontSize:"17px"}}>
              The REZINGO Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p>

<p>Monthly subscription from £149/GBP</p>
                {/* <div className="ptag">
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Innovative Health Metric</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Promote Wellness</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Get More Rewards</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Encourage Healthy Living</li>
                </div> */}
              {/* <div>
                <Link
                 style={{textDecoration:"underline"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 Shop Supplement
                </Link>
              </div> */}
              <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{border:"none"}}
                  to={process.env.PUBLIC_URL + ""}
                >
                  Shop Supplement
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-2 order-lg-2" >
            <div className="card rounded-3xl  p-4">
            <div className="funfact-image text-center ">
              <Link>
                <img
                  src="https://lyma.life/assets/images/supplement/supplement-start-kit@2x.webp"
                  alt=""
                  className="img-fluid h-b1"
                />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountBenefits6.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountBenefits6;
