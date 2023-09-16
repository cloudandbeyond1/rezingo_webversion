import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import VideoPopup from "../../components/video-popup/VideoPopup";
import '../../assets/css/cardview.css';
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const Feature = () => {
    //const [modalStatus, isOpen] = useState(false);
  return (
    <Fragment>
<div className="container containermaxwidth mt-5">
<div className="row justify-content-center d-flex text-center primary-color-bg featurept m-1">
    <h1 className="f-50">
    All-Inclusive Features
    </h1>
    <p className="f-20">Rezingo’s features are designed keeping in mind the diversity of wellness dimensions. Discover our prime features hereunder.</p>
</div>
<div className="row cardmt px-4 mb-5">
<div className="col-lg-4 col-md-6 col-sm-12 p-3 px-auto">
  
 
  <div class = "shadow mb-5 bg-white rounded-3xl h-fix1" style={{padding: "38px"}}>  

    <div className="row justify-content-center">
      
      
        <div className="text-center ptop-4">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
          <i class="fa fa-heartbeat" aria-hidden="true"></i>
          </span>
          </div>
          <div className="cardHead">
          <h4 className="f-24">Holistic Flourishing</h4></div>
          <p className="pt-2 f-16">
          At Rezingo, we celebrate all 8 dimensions of wellness. We are dedicated to helping our users on their journey towards physical fitness, spiritual enlightenment, intellectual stimulation, or financial stability.</p>
          
            </div>
            
    </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12 p-3 px-auto">
  
 
  <div class = "shadow mb-5 bg-white rounded-3xl h-fix1" style={{padding: "38px"}}>  

    <div className="row justify-content-center">
      
      
        <div className="text-center ptop-4">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
          <i class="fa fa-stethoscope" aria-hidden="true"></i>
          </span>
          </div>
          <div className="cardHead">
          <h4 className="f-24">Tech-Infused Health Monitoring</h4></div>
          <p className="pt-2 f-16">
          Rezingo offers cutting-edge health monitoring by integrating with leading health devices. This enables our users to monitor, analyze, and optimize their health journey using real-time data.  </p>
          </div>
            
    </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12 p-3 px-auto">
  
 
  <div class = "shadow mb-5 bg-white rounded-3xl h-fix1" style={{padding: "38px"}}>  

    <div className="row justify-content-center">
      
      
        <div className="text-center ptop-4">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
          <i class="fa fa-medkit" aria-hidden="true"></i>
          </span>
          </div>
          <div className="cardHead">
          <h4 className="f-24">Wellness Marketplace</h4></div>
          <p className="pt-2 f-16">
          Rezingo offers a curated selection of trusted medicines, supplements, and wellness products. We also provide wholesome delicacies from our express cloud kitchen, ensuring you satiate your palate mindfully. </p>
          </div>
           
    </div>
    </div>
  </div>

 
  </div>
 
</div>
 
   
    </Fragment>
  );
};

export default Feature;
