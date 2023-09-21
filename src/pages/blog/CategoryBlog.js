import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import Category from "../../wrappers/blog/Category";
import HeroSliderFitness from "../../wrappers/hero-slider/HeroSliderFitness";
import VideoPopup from "../../components/video-popup/VideoPopup";
import VideoPopupNew from "../../components/video-popup/VideoPopupNew";
const CategoryBlog = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Physical"
        description="Blog of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        
<HeroSliderFitness/>
<VideoPopupNew spaceBottomClass="pb-100" />
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
                {/* <div className="mr-20"> */}
                  <div className="row">
                    {/* blog posts */}
                    <Category />

                  </div>

                  {/* blog pagination */}
                  {/* <BlogPagination /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default CategoryBlog;
