import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutFood from "../../layouts/LayoutFood";
import HeroSliderFood from "../../wrappers/hero-slider/HeroSliderFood";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import TabProductFood from "../../wrappers/product/TabProductFood";
import BannerFive from "../../wrappers/banner/BannerFive";
import CountDownFood from "../../wrappers/countdown/CountDownFood";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import CtaFood from "../../wrappers/cta/CtaFood";
const HomeFood = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Food"
        description="Organic food home of Rezingo react minimalist eCommerce template."
      />
      <LayoutFood
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderFood spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* feature icon */}
        {/* <FeatureIconFour
          spaceTopClass="pt-10"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        /> */}
        {/* tab product */}
        <TabProductFood spaceBottomClass="pb-100 mt-5"
          category="organic food"
          productTabClass="product-tab-fruits"
        />
        {/* banner */}
        <BannerFive />
        <CtaFood spaceTopClass="pt-120" spaceBottomClass="pb-120" />
        {/* countdown */}
        {/* <CountDownFood
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          dateTime="November 13, 2023 12:12:00"
        /> */}
        {/* testimonial */}
        {/* <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        /> */}
        {/* newsletter */}
        {/* <NewsletterTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="green-subscribe"
        /> */}
      </LayoutFood>
    </Fragment>
  );
};

export default HomeFood;
