import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/ourblog.css";
const CountDownWellness = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)} style={{backgroundColor:"#fbfbfb"}}>
      <div className="container containermaxwidth">
        <div className="row align-items-center">
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-1">
          <div className="p-4">
            <div className="funfact-content funfact-res text-left">
              <h1 className="f-50">Partners in Corporate & Academic Wellness</h1>
              <p className="pt-4 ptag">             
By partnering with corporations and universities, Rezingo endeavors to instill wellness as a collective mission. Let’s co-create environments where well-being and productivity co-exist. </p>
                <div className="ptag">
                <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Boost Employee Morale</li>
                <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Improve Student Performance</li>
                <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Create Productive Workspaces</li>
                <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Shape Future Leaders</li>
                </div>
              <div className="slider-btn justify-content-left d-flex funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 Become a Partner
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-1 order-lg-2">
            <div className="rounded-3xl p-4 mt-">
            <div className="funfact-image text-center">
                <img
                  src={process.env.PUBLIC_URL + countDownImage}
                  alt=""
                  className="img-fluid rounded-3xl"
                />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownWellness.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownWellness;
