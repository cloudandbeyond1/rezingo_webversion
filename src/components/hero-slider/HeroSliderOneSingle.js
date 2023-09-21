// import PropTypes from "prop-types";

// import { Link } from "react-router-dom";

// const HeroSliderOneSingle = ({ data }) => {
//   return (
//     <div className="single-slider slider-height-1 bg-light">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
//             <div className="slider-content slider-animated-1">
            
//               <h3 className="animated">{data.title}</h3>
//               <p className="animated pt-3" >{data.subtitle} </p>
//               <div style={{display:"flex", gap: "1.5rem"}}>
//               <div className="slider-btn btn-hover">
//                 <Link
//                   className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
//                   to={process.env.PUBLIC_URL + data.url}
//                 >
//                   Explore Wellness Dimensions
//                 </Link>
//               </div>
//               {/* <div className="slider-btn btn-hover">
//                 <Link
//                   className="animated"
//                   to={process.env.PUBLIC_URL + data.url}
//                 >
//                   VIEW MORE
//                 </Link>
//               </div> */}
//               </div>


//             </div>
//           </div>
//           <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
//             <div className="slider-single-img slider-animated-1 mx-0">
//               <img
//                 className="animated img-fluid mt-5 pt-5 w-100"
//                 src={process.env.PUBLIC_URL + data.image}
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// HeroSliderOneSingle.propTypes = {
//   data: PropTypes.shape({})
// };

// export default HeroSliderOneSingle;


import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 justify-content-center d-flex">
            <div className="slider-content-2 slider-animated-1" >
              <h3 className="animated">{data.title}</h3>
              <p
                className="animated mt-10"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></p>
                <p
                className="animated" style={{marginTop:"-18px"}}
                dangerouslySetInnerHTML={{ __html: data.subtitle1 }}
              ></p>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Explore Wellness Dimensions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderOneSingle;
