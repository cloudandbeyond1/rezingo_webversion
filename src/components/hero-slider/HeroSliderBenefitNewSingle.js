import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderBenefitNewSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-2 slider-animated-1" style={{textAlign:"center"}} >
            <blockquote style={{color: "white",fontSize:"36px",lineHeight:"1.17",marginBottom:"15px"}}>"So many parts of our health and wellbeing are
              <br></br>entwined. REZINGO engineers incremental gains."</blockquote>
              <p style={{fontSize: "18px",
    lineHeight: "26px",
    color: "#fff",
    marginBottom: "25px"}}
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></p>
              {/* <div className="slider-btn btn-hover">
                <Link
                  className="animated" style={{border:"none"}}
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Shop Supplement
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderBenefitNewSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderBenefitNewSingle;
