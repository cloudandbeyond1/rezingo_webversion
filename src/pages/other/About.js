import { Fragment } from "react"; 
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TabAboutUs from "../../wrappers/aboutus/TabAboutUs";

import HeroSliderAboutus from "../../wrappers/hero-slider/HeroSliderAboutus";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About Us"
        description="Furniture home of flone react minimalist eCommerce template."
      />

      
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        
        <HeroSliderAboutus />
        
        
        <TabAboutUs spaceBottomClass="pb-100" category="furniture" />

      </LayoutOne>
    </Fragment>
  );
};

export default About;
