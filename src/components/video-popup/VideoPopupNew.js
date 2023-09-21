import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const VideoPopupNew = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    // <div className={clsx("video-popup", spaceBottomClass)}>
    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-lg-6">
    //         <div className="video-popup__image">
    //           <img
    //             src={
    //               process.env.PUBLIC_URL + "/assets/img/banner/banner-41.jpg"
    //             }
    //             alt=""
    //             className="img-fluid"
    //           />
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="video-popup__content">
    //           <h2 className="title mb-30">
               
    //            Social Wellness
    //           </h2>
    //           <p className="text mb-30">
    //           Social wellness encompasses a variety of healthy behaviors including adequate exercise, proper nutrition and abstaining from harmful habits such as drug use and alcohol abuse. It means learning about and identifying symptoms of disease, getting regular medical checkups, and protecting yourself from injuries and harm.
    //           </p>
    //           <div className="link mb-30">
    //             <Link to={process.env.PUBLIC_URL + "/about"}>
    //               More About Us
    //             </Link>
    //           </div>
    //           <ModalVideo
    //             channel="youtube"
    //             isOpen={modalStatus}
    //             videoId="feOScd2HdiU"
    //             onClose={() => isOpen(false)}
    //           />
    //           <button onClick={() => isOpen(true)}>
    //             <i className="fa fa-play-circle"></i>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div class="video-popup pb-20 py-5 mt-5 ">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="video-popup__image">
                <img src="/assets/img/product/fashion/35.jpg" alt="" class="img-fluid"/>
                </div>
                </div>
                <div class="col-lg-6">
                  <div class="video-popup__content">
                    <h2 class="title mb-30">Physical Wellness</h2>
                    <p class="mb-30">Physical wellness encompasses a variety of healthy behaviors including adequate exercise, proper nutrition and abstaining from harmful habits such as drug use and alcohol abuse.
               It means learning about and identifying symptoms of disease, getting regular medical checkups, and protecting yourself from injuries and harm.</p>
                    <div className="link mb-30">
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  More About Us
                </Link>
              </div>
                      <ModalVideo channel="youtube" isOpen={modalStatus} videoId="8mFIjtVf3YU" onClose={() => isOpen(false)} />
              <button onClick={() => isOpen(true)}>
                <i className="fa fa-play-circle"></i>
              </button>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
  );
};

VideoPopupNew.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default VideoPopupNew;
