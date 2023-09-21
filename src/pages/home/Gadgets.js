import React, { Fragment } from "react";
import SEO from "../../components/seo";
// import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
// import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BannerThree from "../../wrappers/banner/BannerThree";
// import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
// import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
// import BlogFeaturedTwo from "../../wrappers/blog-featured/BlogFeaturedTwo";
import LayoutOne from "../../layouts/LayoutOne";
import BrandLogoSliderThree from "../../wrappers/brand-logo/BrandLogoSliderThree";
import NewsletterFour from "../../wrappers/newsletter/NewsletterFour";

const Gadgets = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Electronics Home"
        description="Electronics home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryOneSlider spaceBottomClass="pb-85" />

        
        

        {/* tab product */}
        <TabProductThree spaceTopClass="py-6" spaceBottomClass="pb-60" category="medical" />

        {/* banner */}
        <BannerThree spaceTopClass="pt-50" spaceBottomClass="pb-50" />

        {/* testimonial */}
        {/* <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        /> */}

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" /> */}

        {/* blog featured */}
        {/* <BlogFeaturedTwo spaceBottomClass="pb-55" /> */}
        <BrandLogoSliderThree spaceBottomClass="pb-95" spaceTopClass="pt-60" />

        <NewsletterFour
          spaceTopClass="pt-50"
          spaceBottomClass="pb-50"
          subscribeBtnClass="hover-red"
          bgColorClass="bg-gray-7"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default Gadgets;
