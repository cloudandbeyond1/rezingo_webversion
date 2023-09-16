// // import React from 'react'

// // function HealthyLifestyle() {
// //   return (
// //     <div id="2uylz">
// //         <section class="code-section mt-12 bg-gray-50 py-12 font-['Poppins'] hovered-element" id="2uylz">
// //             <div id="cta" class="container mx-auto flex flex-col sm:flex-row" style={{flexDirection: "row"}}>
// //                 <div class="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
// //                     <img src="https://media.gettyimages.com/id/1405775159/photo/abstract-nature-scene-composition-of-stones-dried-flowers-stone-podium-product-placement.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=T9Ov-IlUcbWb2T_vJItzPv8wzELf54dEcxgLgTSTDzU=" alt="CTA" class="h-auto " style={{width:"100%"}} data-media="{&quot;id&quot;:&quot;1405775159&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"/>
// //                     </div>
// //                     <div class="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
// //                         <h3 id="cta-header" class="mb-2 text-center text-3xl font-bold sm:text-left sm:text-6xl">Ready to Embrace a Healthy Lifestyle?</h3>
// //                         <p id="cta-text" class="mb-16 text-center text-lg text-gray-700 sm:text-left sm:text-xl">Become a part of the Rezingo community today and embark on your journey to holistic wellness. Remember, the first wealth is health.</p>
// //                         <div id="cta-waitlist-input" class="relative mb-12">
// //                             <input type="email" class="mb-2 w-full rounded border border-white py-4 pl-6 placeholder-gray-600 xl:mb-0 xl:py-6 xl:pr-20" placeholder="Enter your email address"/>
// //                             <button class="xl:py-23 primary-color-bg h-[52px] w-full rounded px-5 text-lg font-semibold text-white xl:absolute xl:inset-y-0 xl:right-1 xl:top-1/2 xl:mr-4 xl:w-auto xl:-translate-y-1/2 xl:transform bg-fuchsia-900 hover:bg-fuchsia-800">Join waiting list</button>
// //                             </div>
// //                             <div id="cta-button" class="mb-12 hidden">
// //                                 <a id="cta-button-text" href="/" class="primary-color-bg items-center rounded px-5 py-3 text-lg font-semibold text-white bg-fuchsia-900 hover:bg-fuchsia-800">Sign Up Now</a>
// //                                 </div>
// //                                 </div>
// //                                 </div>
// //                                 </section>
// //                                 </div>
// //   );
// // }

// // export default HealthyLifestyle


// import PropTypes from "prop-types";
// import clsx from "clsx";
// import { Link } from "react-router-dom";
// import CountdownTimer from "../../components/countdown";

// const HealthyLifestyle = ({
//   spaceTopClass,
//   spaceBottomClass,
//   dateTime,
//   countDownImage
// }) => {
//   return (
//     <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-8 col-lg-6 order-1 order-lg-2">
//             <div className="funfact-content funfact-res text-left">
//               <h3 style={{fontSize:"38px"}}>Ready to Embrace a Healthy Lifestyle?</h3>
//               <p className="pt-4" style={{marginBottom: "4rem",fontSize: "1.25rem",   lineHeight: "1.75rem"}}>Become a part of the Rezingo community today and embark on your journey to holistic wellness. Remember, the first wealth is health.</p>
//               {/* <div className="timer">
//                 <CountdownTimer date={dateTime} />
//               </div> */}
//               {/* <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
//               <Link to={process.env.PUBLIC_URL + "/category"}>
//               Dive Deeper</Link>
//               </div> */}
//               {/* <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
//                 <Link
//                   className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
//                   to={process.env.PUBLIC_URL + "/wellness"}
//                 >
//                   Dive Deeper
//                 </Link>
//               </div> */}

//               <div id="cta-waitlist-input" class="mb-12" style={{position:" relative"}}>
//                 <input type="email" class="mb-2" style={{    paddingTop: "1.5rem",height:"65px", paddingBottom: "1.5rem",paddingRight: "5rem",paddingLeft: "1.5rem"}} placeholder="Enter your email address"/>
//               {/* <button class="" >SUBSCRIBE</button> */}
//               <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
//                 <Link
//                   className="animated" style={{backgroundColor:"#ab87cd",color:"#fff",marginRight: "1rem", top: "11%",right: "0.25rem",    position: "absolute",}}
//                   to={process.env.PUBLIC_URL + "/wellness"}
//                 >
//                   SUBSCRIBE
//                 </Link>
//               </div>
//               </div>

//             </div>
//           </div>
//           <div className="col-md-4 col-lg-6 order-2 order-lg-1">
//             <div className="funfact-image text-center">
//               <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
//                 <img
//                   src={process.env.PUBLIC_URL + countDownImage}
//                   alt=""
//                   className="img-fluid"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// HealthyLifestyle.propTypes = {
//   countDownImage: PropTypes.string,
//   dateTime: PropTypes.string,
//   spaceBottomClass: PropTypes.string,
//   spaceTopClass: PropTypes.string
// };

// export default HealthyLifestyle;


import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";

const HealthyLifestyle = ({ spaceTopClass, spaceBottomClass, dateTime }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth" style={{flexDirection: "row"}}>
        <div className="row align-items-center">
            <div>
                
            </div>
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-left">
            <h3>Ready to Embrace a Healthy Lifestyle?</h3>
              <p className="pt-4" style={{marginBottom: "4rem",fontSize: "18px",   lineHeight: "1.75rem"}}>Become a part of the Rezingo community today and embark on your journey to holistic wellness. Remember, the first wealth is health.</p>
              <div id="cta-waitlist-input" class="mb-12" style={{position:" relative"}}>
                <input type="email" class="mb-2 bg-white" style={{    paddingTop: "1.5rem",height:"65px", paddingBottom: "1.5rem",paddingRight: "5rem",paddingLeft: "1.5rem"}} placeholder="Enter your email address"/>
              {/* <button class="" >SUBSCRIBE</button> */}
              <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff",marginRight: "1rem", top: "11%",right: "0.25rem",    position: "absolute",}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                  SUBSCRIBE
                </Link>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image text-center">
              <Link>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/banbot.jpg"}
                  alt=""
                  className="img-fluid h-b2 rounded-3xl"
                
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HealthyLifestyle.propTypes = {
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default HealthyLifestyle;
