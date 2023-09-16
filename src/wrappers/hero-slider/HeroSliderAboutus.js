
import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import HeroSliderAboutUsSingle from "../../components/hero-slider/HeroSliderAboutUsSingle.js";
import sliderData from "../../data/hero-sliders/hero-slider-about.json";

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

const HeroSliderAboutus = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderAboutUsSingle
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

export default HeroSliderAboutus;
