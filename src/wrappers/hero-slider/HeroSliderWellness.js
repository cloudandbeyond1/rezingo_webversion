import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import WellnessSliderData from "../../data/hero-sliders/hero-slider-wellness.json";
 import HeroSliderWellnessSingle from '../../components/hero-slider/HeroSliderWellnessSingle';

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

const HeroSliderWellness = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {WellnessSliderData && (
          <Swiper options={params}>
            {WellnessSliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderWellnessSingle
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

export default HeroSliderWellness;
