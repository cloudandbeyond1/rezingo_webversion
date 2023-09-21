import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderWellness from "../../wrappers/hero-slider/HeroSliderWellness";
import VideoPopup from "../../components/video-popup/VideoPopup";
import ProductSliderFour from "../../wrappers/product/ProductSliderFour";
import WellnessBlog from "../../wrappers/blog/WellnessBlog";

const Wellness = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Program"
        description="Black shop home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderWellness />
        {/* <ProductSliderFour/> */}
        <div className="blog-area blog-no-sidebar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="ml-20">
                  <div className="row">
                    {/* blog posts */}
                    <WellnessBlog />

                  </div>

                  {/* blog pagination */}
                  {/* <BlogPagination /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner */}
      </LayoutOne>
    </Fragment>
  );
};

export default Wellness;
