import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import VideoPopup from "../../components/video-popup/VideoPopup";



const WellnessBlog = () => {
    //const [modalStatus, isOpen] = useState(false);
  return (
    <Fragment>
<div className="row">
<div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
 
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #172a53", padding: "38px"}}>  

    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
      
        <div className="funfact-content funfact-res text-left">
          <h3>Physical Wellness</h3>
          <p className="pt-4">Physical wellness encompasses a variety of healthy behaviors including adequate exercise, proper nutrition and abstaining from harmful habits such as drug use and alcohol abuse.</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
            </div>
    </div>
    </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #527991", padding: "38px"}}>  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Social Wellness</h3>
          <p className="pt-4">Our relationships can offer support during difficult times. Social wellness involves building healthy, nurturing, and supportive relationships as well as fostering a genuine connection with those around you.</p>
          {/* <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
            <a href="/Shop">View More</a>
            </div> */}
            <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
            <Link to={process.env.PUBLIC_URL + "/social"}>
                 View More
                </Link>
              </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/social"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new2.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #00abcd", padding: "38px"}}>  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Financial Wellness</h3>
          <p className="pt-4">Pay yourself first. Before you pay any bills, develop a habit of paying yourself first. That means saving and investing a portion of your earnings before you do anything else with your money.</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new3.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #fdd500", padding: "38px"}}>  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Intellectual Wellness</h3>
          <p className="pt-4">Intellectual wellness recognizes creative abilities and encourages us to find ways to expand our knowledge and skills. Intellectual wellness can be developed through personal and professional development.</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                   src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new4.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>


  <div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #f6911e", padding: "38px"}}>  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Occupational Wellness</h3>
          <p className="pt-4">Occupational Wellness is the ability to make choices that foster positive attitudes toward jobs, class-work, as well as your co-workers and classmates which will enhance your personal and professional satisfaction and promote lifelong learning.</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                      src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new5.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #63bb46", padding: "38px"}}>  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Environmental Wellness</h3>
          <p className="pt-4">Environmental wellness is having good health by occupying pleasant, stimulating environments that support well-being. It promotes interaction with nature and also creating an enjoyable personal environment (both in and out of your workspace).</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                      src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new6.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-12  p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #5d256b", padding: "38px"}}>  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Spiritual Wellness</h3>
          <p className="pt-4">Spiritual wellbeing relates to our sense of life-meaning and purpose. It can include our connection to culture, community, spirituality and/or religiosity and includes the beliefs, values, mental models and ethics we hold.</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                      src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new8.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-12 p-3">
  <div className="container-fluid">
  <div class = "shadow mb-5 bg-white" style={{borderLeft: "10px solid #d11388", padding: "27px"}}>  
  
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 order-2 order-lg-1">
        <div className="funfact-content funfact-res text-left">
          <h3>Emotional Wellness</h3>
          <p className="pt-4">Cultivating emotional wellness is essential for finding happiness and success. We will all face hardships and challenges. Those that are emotionally healthy have the ability to deal with these challenges, including stress, relationships.</p>
          <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
          <Link to={process.env.PUBLIC_URL + "/category"}>
                 View More
                </Link>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-6order-1 order-lg-2">
              <div className="funfact-image text-center single-banner">
              <Link to={process.env.PUBLIC_URL + "/category"}>
                <img
                      src={process.env.PUBLIC_URL + "/assets/img/product/fashion/new7.png"}
                  alt=""
                  
                  className="w-100"
                />
              </Link>
              </div>
              </div>
            </div>
    </div>
  </div>
  </div>

  
  


  
  
  
  
</div>





    


    


    

    

    
   
    </Fragment>
  );
};

export default WellnessBlog;
