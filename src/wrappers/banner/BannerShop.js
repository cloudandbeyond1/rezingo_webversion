import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/bannershop.json";
import BannerShopSingle from "../../components/banner/BannerShopSingle.js";

const BannerShop = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div style={{textAlign:"center"}}>
            <div class="welcome-content text-center"><h5 style={{color:"#703ca2"}}>Trending Products</h5><h1>CHOOSE CATEGORY</h1></div>
          </div>
          {bannerData?.map((single, key) => (
            <div className="col-lg-6 col-md-4" key={key}>
              <BannerShopSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BannerShop.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerShop;
