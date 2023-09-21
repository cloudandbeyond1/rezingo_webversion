import PropTypes from "prop-types";
import clsx from "clsx"
import { Link } from "react-router-dom";

const CtaFood = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={clsx("cta-area bg-img", spaceTopClass, spaceBottomClass)}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/img/bg/bg-7.jpg"
        })`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ms-auto me-auto">
            <div className="cta-content text-center">
              <h2 className="title">
                Every Food Comes With <br /> a Unique flavour
              </h2>
              <p className="text">
                All Food Offer Up To <span>40% Off</span>
              </p>
              <Link
                className="cta-btn"
                to={process.env.PUBLIC_URL + "/shopdetails"}
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CtaFood.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CtaFood;
