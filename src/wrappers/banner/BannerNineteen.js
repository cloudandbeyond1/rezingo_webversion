import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerNineteen = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container padding-20-row-col">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner24.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2 pink-banner">
                <span>-20% Off</span>
                <h2>Native Food</h2>
                <h5>Best for your Taste.</h5>
                <div className="slider-btn btn-hover">
                <button className="animated" style={{backgroundColor:"#ab87cd", border:"none",padding: "13px 33px 13px",color:"#fff"}} >
                  SHOP NOW
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner25.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm15-2 pink-banner">
                <h3>Health Juices</h3>
                <p>
                  Starting At <span>$99.00</span>
                </p>
                <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner26.jpg"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm17-1 pink-banner">
                <h3>Cup Cake </h3>
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
    </div>
  );
};

BannerNineteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerNineteen;
