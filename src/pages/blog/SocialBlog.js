import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderFitness from "../../wrappers/hero-slider/HeroSliderFitness";
import SocialWellness from "../../wrappers/blog/SocialWellness";
import HeroSliderSocial from "../../wrappers/hero-slider/HeroSliderSocial";
import VideoPopup from "../../components/video-popup/VideoPopup";
const SocialBlog = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Physical"
        description="Blog of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        
<HeroSliderSocial/>

{/* <VideoPopup spaceBottomClass="pb-100" /> */}
<div>
<VideoPopup spaceBottomClass="pb-100" />
</div>
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Physical", path: process.env.PUBLIC_URL + pathname }
          ]} 
        /> */}
        <div className="blog-area pt-50 blog-no-sidebar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mr-20">
                  <div className="row">
                    {/* blog posts */}
                    <SocialWellness />

                  </div>

                  {/* blog pagination */}
                  {/* <BlogPagination /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SocialBlog;
