import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const HeroSliderAboutUsSingle = ({ data }) => {
  return (
    <div
      className="single-slider-2 aboutslider-height-1 d-flex align-items-center slider-height-res hm-13-slider"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.image})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-13 slider-animated-1">
            <div class="slider-content-white slider-content-2 slider-content-2--white slider-animated-1">
              <h4 class="animated text-white">Future is yours</h4>
              <h2 class="animated text-white pt-3">Tap into motivation<br></br>
              and feel energized class after class</h2>
              <div class="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4"><a class="animated text-white"  href="/">Read More</a></div>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderAboutUsSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderAboutUsSingle;
