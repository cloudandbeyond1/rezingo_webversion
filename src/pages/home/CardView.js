import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import VideoPopup from "../../components/video-popup/VideoPopup";
import '../../assets/css/cardview.css';
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const CardView = () => {
    //const [modalStatus, isOpen] = useState(false);
  return (
    <Fragment>
<div className="container containermaxwidth pt-5"> 
<SectionTitleSeven
subtitleText="Transcending the traditional concept of health and fitness, Rezingo carries you through an enlightening wellness journey in four pivotal steps."

titleText="How It Works"          

positionClass="text-center"

spaceClass="mb-55"

borderClass="no-border"

/>
<div className="row">
<div className="col-lg-3 col-md-6 col-sm-12 p-3 ">
  
 
  <div class = "shadow1 mb-5 bg-white rounded-3xl h-fix" style={{padding: "38px"}}>  

    <div className="row justify-content-center mtop-5">
      
      
        <div className="text-center">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
            1
          </span>
          </div>
          <div className="cardHead">
          <h4 className="f-24" >Recognize & Acknowledge</h4></div>
          <p className="pt-2 f-16">Recognize your current state in the diverse realms of wellness. This step is crucial in acknowledging your strengths and areas of improvement. Our intuitive platform assists in this self-discovery by providing progressive self-assessment tools.</p>
          
            </div>
            
            {/* <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
            </div> */}
    </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 col-sm-12 p-3 ">
  
 
  <div class = "shadow1 mb-5 bg-white rounded-3xl h-fix" style={{padding: "38px"}}>  

    <div className="row justify-content-center mtop-5">
      
      
        <div className="text-center">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
            2
          </span>
          </div>
          <div className="cardHead">
          <h4>Set Your Wellness Goals</h4></div>
          <p className="pt-2 f-16">Consciously set goals that align with your health aspirations. Our well-designed interface helps you visualize wellness objectives across various domains, creating a comprehensive picture.</p>
          
            </div>
            
            {/* <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
            </div> */}
    </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 col-sm-12 p-3 ">
  
 
  <div class = "shadow1 mb-5 bg-white rounded-3xl h-fix" style={{padding: "38px"}}>  

    <div className="row justify-content-center mtop-5">
      
      
        <div className="text-center">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
            3
          </span>
          </div>
          <div className="cardHead">
          <h4>Journey Towards Wellness</h4></div>
          <p className="pt-2 f-16">Start your wellness journey armed with the wisdom of revered practitioners, state-of-art health monitoring, and a curated wellness marketplace. Navigate on the path of transformational wellness, guided by Rezingo.</p>
          
            </div>
            
            {/* <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
            </div> */}
    </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 col-sm-12 p-3 ">
  
 
  <div class = "shadow1 mb-5 bg-white rounded-3xl h-fix" style={{padding: "38px"}}>  

    <div className="row justify-content-center mtop-5">
      
   
        <div className="text-center">
        <div className="primary-color-bg mx-auto mb-4 d-flex h-20 w-20 items-center justify-center rounded-full text-4xl">
          <span className="bgText">
            4
          </span>
          </div>
          <div className="cardHead">
          <h4>Achieve & Celebrate</h4></div>
          <p className="pt-2 f-16">Experience the joy of achieving your wellness goals with Rezingo. Celebrate your progress and take pride in your enhanced 'Health Score', a testament to your ongoing wellness journey.</p>
          
            </div>
            
            {/* <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
            </div> */}
    </div>
    </div>
  </div>
  </div>
 
</div>
 
   
    </Fragment>
  );
};

export default CardView;
