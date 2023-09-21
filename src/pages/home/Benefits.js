import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
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
import CountBenefits6 from "./CountBenefits6";
import ImageSliderOne from "./ImageSliderOne";
import HeroSliderBenefitNew from "../../wrappers/hero-slider/HeroSliderBenefitNew";
const Benefits = () => {
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
        {/* hero slider */}
        <HeroSliderBenefits/>
        {/* banner */}
        {/* <BannerShop spaceTopClass="pt-60" spaceBottomClass="pb-65" /> */}
        <CountDownBenefits spaceTopClass="bottomtopnew" dateTime="November 13, 2023 12:12:00" countDownImage="/assets/img/f1.jpg"/>
        <CountBenefits2 spaceTopClass="bottomtopnew" dateTime="November 13, 2023 12:12:00" countDownImage="/assets/img/f1.jpg"/>
        <CountBenefits3 spaceTopClass="bottomtopnew" dateTime="November 13, 2023 12:12:00" countDownImage="/assets/img/f1.jpg"/>
        <CountBenefits4 spaceTopClass="bottomtopnew" dateTime="November 13, 2023 12:12:00" countDownImage="/assets/img/f1.jpg"/>
        <CountBenefits5 spaceTopClass="bottomtopnew" dateTime="November 13, 2023 12:12:00" countDownImage="/assets/img/f1.jpg"/>
        {/* <div class="row hero-image">
          <div class="col-lg-12 justify-content-center d-flex text-center py-5">
            <div class="section-title-8 text-center mb-55 no-border">
              <blockquote style={{color: "white",fontSize:"36px",lineHeight:"1.17",marginBottom:"15px"}}>"So many parts of our health and wellbeing are
              <br></br>entwined. LYMA engineers incremental gains."</blockquote>
              <p style={{color: "white", fontSize: "18px", lineHeight: "1.5em", marginTop: "25px"}}>Dr Paul Clayton pHd LYMA Clinical Director, Clinical Pharmacologist.</p>
              </div>
              </div>
              </div> */}
              <HeroSliderBenefitNew/>
              <CountBenefits6 spaceTopClass="pt-50" spaceBottomClass="pb-100" dateTime="November 13, 2023 12:12:00" countDownImage="/assets/img/f1.jpg"/>
        <BrandLogoSliderThree spaceBottomClass="pb-95" spaceTopClass="pt-50" />
        <ImageSliderOne />
        
      </LayoutOne>
    </Fragment>
  );
};

export default Benefits;
