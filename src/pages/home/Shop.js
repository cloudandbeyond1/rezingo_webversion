import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import BannerShop from "../../wrappers/banner/BannerShop";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderShop from "../../wrappers/hero-slider/HeroSliderShop";
import TabProductShop from "../../wrappers/product/TabProductShop";
import BannerSix from "../../wrappers/banner/BannerSix";
const Shop = () => {
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
        <HeroSliderShop/>
        {/* banner */}
        {/* <BannerShop spaceTopClass="pt-60" spaceBottomClass="pb-65" /> */}
        <BannerSix spaceTopClass="pt-100" spaceBottomClass="pb-80" />
        {/* tab product */}
        <TabProductShop spaceBottomClass="pb-60" category="accessories" />
        {/* <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default Shop;
