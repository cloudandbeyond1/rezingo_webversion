import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import VideoPopup from "../../components/video-popup/VideoPopup";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import"../../assets/css/ourblog.css";


const OurBlog = () => {
  //const [modalStatus, isOpen] = useState(false);
  return (
    <Fragment>
      <SectionTitleSeven
        titleText="Latest From Our Blog"
        subtitleText="Stay updated with the latest research, tips, and stories from the wellness community. Explore our latest articles to enlighten your wellness journey."
        spaceClass="mb-60"
        borderClass="no-border"
        positionClass="text-center"
      />
      
      <div className="container">
      <div className="row blog-123">
      {/* <div className="blog2"> */}
      <div className="col-md-4 col-xs-12 mb-4 blogg">
        <div className="card shadow blog-222" style={{width: "368px"}}>
  <img src="assets/img/product/fashion/15.png" className="card-img-top" alt="..." style={{borderRadius: "30px",padding:"10px"}} 
/>
  <div className="card-body  py-5" style={{height: "350px"}}>
  <a href="#" className=""  style={{textTransform: "uppercase",color:"#5d2d8d",fontWeight:"500"}}    
>June 1, 2023</a>
    <h3 className="card-title" style={{fontWeight: "600", lineHeight: "34px", paddingBottom: "2px", paddingTop: "10px"}}  
>The Science Behind Holistic Wellness: A Comprehensive Guide</h3>
    <p className="card-text" style={{marginBottom: "12px"}}>Discover the science and evidence behind holistic wellness and its multiple dimensions. Learn to integrate these practices into your daily life.</p>
    <a href="#" className="" style={{textTransform: "uppercase",color:"#5d2d8d",fontWeight:"500"}}   
>View Post <i className="pe-7s-angle-right"></i></a>
  </div>
</div>
</div>
<div className="col-md-4 col-xs-12 mb-4 blogg">
        <div className="card shadow blog-222" style={{width: "368px"}}>
  <img src="assets/img/product/fashion/16.png" className="card-img-top" alt="..." style={{borderRadius: "30px",padding:"10px"}}  
/>
  <div className="card-body py-5" style={{height: "350px"}}>
  <a href="#" className=""  style={{textTransform: "uppercase",color:"#5d2d8d",fontWeight:"500"}}    
>June 1, 2023</a>
    <h3 className="card-title" style={{fontWeight: "600", lineHeight: "34px", paddingBottom: "2px", paddingTop: "10px"}}  
>Rezingo's 'Health Score': Rewriting Health Insurance</h3>
    <p className="card-text" style={{marginBottom: "12px"}}>Understand the concept of 'Health Score’ introduced by Rezingo, its impact on the healthcare and insurance industry, and what it means for you.</p>
    <a href="#" className=""  style={{textTransform: "uppercase",color:"#5d2d8d",fontWeight:"500"}}    
>View Post <i className="pe-7s-angle-right"></i></a>
  </div>
</div>
</div>
<div className="col-md-4 col-xs-12 mb-4 blogg">
        <div className="card shadow blog-222" style={{width: "368px"}}>
  <img src="assets/img/product/fashion/17.png" className="card-img-top" alt="..." style={{borderRadius: "30px",padding:"10px"}}
/>
  <div className="card-body py-5" style={{height: "350px"}}>
  <a href="#" className=""  style={{textTransform: "uppercase",color:"#5d2d8d",fontWeight:"500"}}   
>June 1, 2023</a>
    <h3 className="card-title" style={{fontWeight: "600", lineHeight: "34px", paddingBottom: "2px", paddingTop: "10px"}}  
>The Interplay of Wellness and Productivity in the Workplace</h3>
    <p className="card-text" style={{marginBottom: "12px"}}>The Interplay of Wellness and Productivity in the Workplace</p>
    <a href="#" className=""  style={{textTransform: "uppercase",color:"#5d2d8d",fontWeight:"500"}}     
>View Post <i className="pe-7s-angle-right"></i></a>
  </div>
</div>
</div>
        
      </div>
      </div>
      {/* </div> */}

      {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
    </Fragment>
  );
};

export default OurBlog;
