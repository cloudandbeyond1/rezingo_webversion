import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "./sub-components/ProgramRating";
import { getDiscountPrice } from "../../helpers/program";
import ProgramModal from "./ProgramModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";

const ProgramGridSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap peletonWrap", spaceBottomClass)} style={{height:"385px"}}>
        <div className="product-img mt-3 d-flex justify-content-center" >
          <Link to={process.env.PUBLIC_URL + "/program/" + product.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.image[0]}
              alt=""
              style={{width: "90%"}}
            />
            
          </Link>
          

        
        </div>
        <div className="product-content text-left" style={{marginBottom:"20px"}}>
          {/* <p>{product.subtitle}</p> */}
          <h3 className="lineheight-20 py-2">            
              {product.name}
          </h3>
                                    <span class="col-3 badge badge-primary pt-1" style={{width:"90px"}}>{product.category}</span>
                                    <span class="col-2 badge badge-success mx-1 pt-1">6 Weeks</span>
                                    <span class="col-2 badge badge-danger mr-1 pt-1">3 Level</span>
                                    {/* <span class="col-3 badge badge-info pt-1 ml-6" style={{width:"90px"}}>2 Practitioners</span> */}
        </div>
        <div class="row mt-1">
                                 
                                </div>
      </div>
      {/* product modal */}
      <ProgramModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProgramGridSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProgramGridSingle;
