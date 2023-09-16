import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerSix = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={clsx("banner-area", spaceTopClass, spaceBottomClass)}
    >
      <div className="container padding-20-row-col">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-23.png"
                  } sx={{height:"640px !important"}}
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2 ">
                {/* <span>-20% Off</span> */}
                <h2 className="text-dark">Engage the plan</h2>
                <h5 className="text-dark">Best for your Mind.</h5>
                <Link to={process.env.PUBLIC_URL + "/Food"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner21.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm15-2 pink-banner">
                {/* <h3>Pink Tulip </h3> */}
                {/* <p>
                  Starting At <span>$99.00</span>
                </p> */}
                {/* <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>  */}
              </div>
            </div>
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_800/https://images.ctfassets.net/6jnflt57iyzx/5X6Tj7H33XakjhyT9x8m91/f44f5d048890939b8786fd5ebc4f445b/Focused_Fitness_Bootcamp_Explorer.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm17-1">
                {/* <h3 className="text-white">Shop more programs </h3> */}
                {/* <p>
                  Starting At <span>$99.00</span>
                </p> */}
                {/* <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                  <i className="fa fa-long-arrow-right" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerSix.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerSix;
