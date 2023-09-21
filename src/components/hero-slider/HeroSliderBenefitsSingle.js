import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderBenefitsSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-margin slider-animated-1" style={{textAlign:"center"}} >
              <h3 className="animated" style={{ fontSize: "80px",
    lineHeight: "1.05",
    color: "#fff",
    marginBottom: "15px"}}>{data.title}</h3>
              <p style={{fontSize: "18px",
    lineHeight: "26px",
    color: "#fff",
    marginBottom: "25px"}}
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></p>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated" style={{border:"none"}}
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Shop Supplement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderBenefitsSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderBenefitsSingle;
