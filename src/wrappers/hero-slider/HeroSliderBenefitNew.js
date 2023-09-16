import PropTypes from "prop-types";
import clsx from "clsx";
import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import sliderData from "../../data/hero-sliders/hero-slider-benefits-new.json";
import HeroSliderBenefitNewSingle from "../../components/hero-slider/HeroSliderBenefitNewSingle";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false
};

const HeroSliderBenefitNew = ({ spaceLeftClass, spaceRightClass }) => {
  return (
    <div className={clsx("slider-area", spaceLeftClass, spaceRightClass)}>
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderBenefitNewSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

HeroSliderBenefitNew.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default HeroSliderBenefitNew;
