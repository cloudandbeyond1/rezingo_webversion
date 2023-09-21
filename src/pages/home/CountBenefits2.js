import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/ourblog.css";
const CountBenefits2 = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth">
        <div className="row align-items-center">
          <div className="col-md-5 col-xs-5 col-lg-5 order-1 order-lg-2">
          <div className="card">
            <div className="funfact-content funfact-res text-left paddingnew">
              <h3 style={{fontWeight:"500",fontSize:"36px"}}>Health: build your resilience</h3>
              <p className="pt-4 ptag" style={{fontSize:"17px"}}>
              Maximise your immunity and strengthen your system. Inflammation is at the core of many of our health issues and can age you prematurely. Our proven ingredients work with your system to naturally engineer you to your very best.</p>
                {/* <div className="ptag">
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Innovative Health Metric</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Promote Wellness</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Get More Rewards</li>
            <li><span class="bullet bullet-dot bg-primary h-15px w-15px"></span>Encourage Healthy Living</li>
                </div> */}
              <div>
                <Link
                 style={{textDecoration:"none" , borderBottom: "1px solid #000",fontSize: "11px", color: "#000", letterSpacing: "1px", lineHeight: "16px", paddingBottom: "2px"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 READ MORE
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 order-2 order-lg-1" >
            <div className="card rounded-3xl  p-4">
            <div className="funfact-image text-center ">
              <Link>
                <img
                  src="https://lyma.life/assets/images/supplement/benefits-health@2x.webp"
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

CountBenefits2.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountBenefits2;
