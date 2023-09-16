import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/banner-one.json";
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";
import { Link } from "react-router-dom";
const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      
      <div className="container-fluid">
        <div className="row ">
          {bannerData?.map((single, key) => (
            <div className="col-lg-12 col-md-12 p-5" key={key}>
              <div className="row mx-auto justify-content-center shadow-lg py-5 my-5 text-center rounded-3 bg-white" style={{maxWidth:"940px"}}>
                <div className="card border-0 bg-transparent">
									<div className="card-body">
										<h5 className="display-6 fw-bold">Get our Mobile App on</h5>
										<p className="text-black-50 px-5 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sequi natus autem non temporibus aperiam, nesciunt iusto, perspiciatis.</p>
									</div>
                  <div className="col-12 col-lg-auto mt-3 mt-lg-0">
										<Link><img src="/assets/img/googleplay.png" height="54" className="mt-3"/></Link>
										<Link><img src="/assets/img/appstore.png" className="ms-xl-3 ms-lg-1 mt-3 ms-0 " height="54"/></Link>
									</div>
								</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;
