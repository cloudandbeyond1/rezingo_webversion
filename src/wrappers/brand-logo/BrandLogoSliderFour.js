import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";

const settings = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
};

const BrandLogoSliderFour = ({ spaceBottomClass, spaceTopClass, noBorder }) => {
  return (
    <div className={clsx("brand-logo-area", noBorder ? "" : "", spaceBottomClass, spaceTopClass)}>
      <div className="container-fluid px-5">
      <div style={{textAlign:"center"}}>
            <div class="welcome-content text-center"><h5 style={{color:"#703ca2"}}>Special Offer</h5><h1>OUR TOP PRODUCTS</h1></div>
          </div>

        <div className="brand-logo-active">
          {brandLogoData && (
            <Swiper options={settings}>
              {brandLogoData.map((single, key) => (
                <SwiperSlide key={key}>
                  <BrandLogoOneSingle
                    data={single}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        
      </div>
    </div>
  );
};

BrandLogoSliderFour.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BrandLogoSliderFour;
