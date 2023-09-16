import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import ProgramTopSection from "../../wrappers/Program/Programtopsection";
import BannerShop from "../../wrappers/banner/BannerShop";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderShop from "../../wrappers/hero-slider/HeroSliderShop";
import TabProductShop from "../../wrappers/product/TabProductShop";
import HeroSliderBenefits from "../../wrappers/hero-slider/HerosliderBenefits";
import CountDownBenefits from "./CountDownBenefits";
import CountBenefits2 from "./CountBenefits2";
import CountBenefits3 from "./CountBenefits3";
import CountBenefits4 from "./CountBenefits4";
import CountBenefits5 from "./CountBenefits5";
import BrandLogoSliderThree from "../../wrappers/brand-logo/BrandLogoSliderThree";
const Health = () => {
  return (
    <Fragment>

      <SEO
        titleTemplate="Shop"
        description="Shop home of flone react minimalist eCommerce template."
      />

      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderBenefits
        spaceTopClass="pt-100"
        />

       <ProgramTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
        />

      </LayoutOne>

    </Fragment>
  );
};

export default Health;
