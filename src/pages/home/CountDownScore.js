import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/ourblog.css";
const CountDownScore = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth">
        <div className="row align-items-center">
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-2">
          <div className="card">
            <div className="funfact-content funfact-res text-left p-4">
              <h3 className="f-50">Rezingo Health Score</h3>
              <p className="pt-4 ptag">
              Rezingo introduces a 'Health Score', an innovative metric that encapsulates an individual’s health engagements. Higher scores can potentially lead to richer rewards and benefits. Join us as we usher in a new dawn of health-oriented metrics.
                </p>
                <div className="ptag">
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Innovative Health Metric</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Promote Wellness</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Get More Rewards</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Encourage Healthy Living</li>
                </div>
              <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff",width:"285px"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 Evaluate Your 'Health Score' Now
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-2 order-lg-1">
            <div className="card rounded-3xl bgimg p-4">
            <div className="funfact-image text-center ">
              <Link>
                <img
                  src="https://avi-health.com/wp-content/uploads/2023/01/frame-157-1.png"
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

CountDownScore.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownScore;
