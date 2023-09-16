import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductCartQuantity } from "../../helpers/program";
import Rating from "./sub-components/ProgramRating";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";

const ProgramDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
}) => {
  const dispatch = useDispatch();
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  return (
    <div className="product-details-content ml-70">
         <h2 style={{fontSize: "50px",
    fontWeight: "600"}}>{product.name}</h2>
      {/* <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
            <span className="old">
              {currency.currencySymbol + finalProductPrice}
            </span>
          </Fragment>
        ) : (
          <span>{currency.currencySymbol + finalProductPrice} </span>
        )}
      </div> */}
      {product.rating && product.rating > 0 ? (
        <div className="pro-details-rating-wrap">
          {/* <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div> */}
        </div>
      ) : (
        ""
      )}


          {/* <div style={{display:"flex"}}>
<div class="sc-jicfeM EhNiX">
<div data-test-id="programDuration" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">1</header>
<header class="sc-gNvmti kbWScQ">Week</header>
</div>
<div data-test-id="programDaysPerWeek" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">3</header>
<header class="sc-gNvmti kbWScQ">Days/Week</header>
</div>
<div data-test-id="programTotalNumClasses" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">3</header>
<header class="sc-gNvmti kbWScQ">Classes</header>
</div>
<div data-test-id="programMinsPerDay" class="sc-fvPiJg hPQqxG">
<header class="sc-czuydh iPdKgf">30-30</header><header class="sc-gNvmti kbWScQ">mins per day</header>
</div>
</div><div class="sc-jTNsyj Aa-def"></div><div data-test-id="programInstructorSection" class="sc-iAUoVB gCMXHd"><div class="sc-eyFZrc eVvkOF"><div data-test-id="programInstructorAvatar" class="sc-gMsnKO dKTwR"><img alt="Ben Alldis" src="https://res.cloudinary.com/peloton-cycle/image/fetch/ar_1,c_fill,dpr_0.8,f_auto,g_face,h_40,q_auto:good,w_40/https://s3.amazonaws.com/workout-metric-images-prod/1d00ad7b40554729b514cb1ee47903b6" class="sc-fXEqDS escYwt sc-dGXBhE ckUuMw sc-eOjLfn ggAjco"/></div><div data-test-id="programInstructorName" class="sc-jEWOvK ePNIqs"><header class="sc-dRaBNj drmdlH">Ben</header><header class="sc-dRaBNj drmdlH">Alldis</header></div></div></div></div>

 */}





<div className="align-content-around mt-10" >

<span className="badge text-bg-primary">{product.category}</span>



<span className="badge text-bg-success ml-10">4 Weeks</span>

<span className="badge text-bg-secondary ml-10"> 100 Users</span>

</div>

      


      {/* <div style={{display:"flex",marginLeft:"-28px",textAlign:"center"}}>
  <div data-test-id="programDuration" style={{marginLeft:"30px"}}>
    <header class="sc-hAKdCM KmGwu">1</header>
    <header class="sc-jhCLbd bnUQBA">Week</header>
    </div>
    <div data-test-id="programDaysPerWeek" style={{marginLeft:"30px"}}>
      <header class="sc-hAKdCM KmGwu">5</header>
      <header class="sc-jhCLbd bnUQBA">Days/Week</header>
      </div>
      <div data-test-id="programTotalNumClasses" style={{marginLeft:"30px"}}>
        <header class="sc-hAKdCM KmGwu">5</header>
        <header class="sc-jhCLbd bnUQBA">Classes</header>
        </div>
        <div data-test-id="programMinsPerDay" style={{marginLeft:"30px"}}>
          <header class="sc-hAKdCM KmGwu">30-30</header>
          <header class="sc-jhCLbd bnUQBA">mins per day</header>
          </div>
          </div> */}

  <div class="sc-jGNbpL dctrXK" style={{display: "block",height: "51px",marginRight: "48px"}}></div>
<div data-test-id="programInstructorSection" class="sc-hBUSJg kVbrLm">
  <div class="sc-lJKBn jNxQhd" style={{display:"flex"}}>
    <div data-test-id="programInstructorAvatar">
      <img alt="Jermaine Johnson" src="https://res.cloudinary.com/peloton-cycle/image/fetch/ar_1,c_fill,dpr_1.0,f_auto,g_face,h_40,q_auto:good,w_40/https://s3.amazonaws.com/workout-metric-images-prod/4098e906377c46e080525898697cf3ee" class="sc-fXEqDS escYwt sc-dGXBhE ckUuMw sc-hcLkzq eyWLvX"/>
      </div>
      <div data-test-id="programInstructorName" style={{marginLeft:"20px"}} >
        <header class="sc-jUmMBS jzNKnU">Jermaine</header>
        <header class="sc-jUmMBS jzNKnU">Johnson</header>
        </div>
        </div>
        </div>
<div class="pro-details-list" style={{border:"1px solid #e5e5e5"}}></div>

      {product.variation ? (
        <div>
          
         










         
          <div class="sc-bKURNj hdQqYo">
            <p data-test-id="programEquipmentLabel" style={{marginBottom:"20px"}}>Equipment</p>
            <div class="sc-eCwtPL eyUOZw" style={{display:"flex"}}>
              <div data-test-id="programEquipment" style={{padding: "8px",marginBottom: "6px",marginRight: "6px",color: "rgb(168, 172, 177)", backgroundColor: "rgba(76, 82, 94, 0.15)", borderRadius: "3px", width: "fit-content", whiteSpace: "nowrap",fontSize: "12px",lineHeight: "18px",letterSpacing: "0px",}}>Workout Mat</div>
              <div data-test-id="programEquipment"style={{padding: "8px",marginBottom: "6px",marginRight: "6px",color: "rgb(168, 172, 177)", backgroundColor: "rgba(76, 82, 94, 0.15)", borderRadius: "3px", width: "fit-content", whiteSpace: "nowrap",fontSize: "12px",lineHeight: "18px",letterSpacing: "0px",}}>Medium Weights</div>
              <div data-test-id="programEquipment" style={{padding: "8px",marginBottom: "6px",marginRight: "6px",color: "rgb(168, 172, 177)", backgroundColor: "rgba(76, 82, 94, 0.15)", borderRadius: "3px", width: "fit-content", whiteSpace: "nowrap",fontSize: "12px",lineHeight: "18px",letterSpacing: "0px",}}>Heavy Weights</div>
              </div>
              </div>

              <div data-test-id="recommendedScheduleButton" style={{marginTop:"25px"}}>
                <div style={{display:"flex"}}>
<header data-test-id="programRecommendedScheduleLabel" class="sc-iWahwt kFOEeO">Recommended Schedule</header>

<div style={{marginLeft:"5px"}}><i class="fa fa-external-link" aria-hidden="true"></i>
 </div>
 </div>

      <div class="sc-bGJWyN hfXUi" style={{display:"flex",marginTop:"15px"}}>
        <p data-test-id="programWeek" class="sc-cDTfQR iipzeq">Week 1</p>
        <div data-test-id="programWeekDayDots" >
      
          <i class="fa fa-circle " style={{color:"#60abd2",marginLeft:"4px",height:"8px"}}></i>
          <i class="fa fa-circle " style={{color:"#60abd2",marginLeft:"4px"}}></i>
          <i class="fa fa-circle " style={{color:"#60abd2",marginLeft:"4px"}}></i>
          <i class="fa fa-circle " style={{color:"#60abd2",marginLeft:"4px"}}></i>
          <i class="fa fa-circle " style={{color:"#60abd2",marginLeft:"4px"}}></i>
          <i class="fa fa-circle " style={{color:"#4c525e",marginLeft:"4px"}}></i>
          <i class="fa fa-circle " style={{color:"#4c525e",marginLeft:"4px"}}></i>

              </div>
              </div>

              <div data-test-id="programWeekActiveDaysAndClasses" style={{display:"flex",marginTop:"15px"}}>
                <header class="sc-gfvLxf iIThGk">5 days</header>
                <span class="sc-gsFzgR chbwVC"> </span>
                <span aria-hidden="true" style={{marginLeft:"8px",marginRight:"8px"}}>·</span>
                <span class="sc-gsFzgR chbwVC"> </span>
                <header class="sc-gfvLxf iIThGk">5 classes</header>
                </div>


 </div>

         
             

        
 <div class="pro-details-list" style={{border:"1px solid #e5e5e5"}}></div>

        </div>
        
      ) : (
        ""
      )}
      {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              ENROLL NOW
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  dispatch(addToCart({
                    ...product,
                    quantity: quantityCount,
                    selectedProductColor: selectedProductColor ? selectedProductColor : product.selectedProductColor ? product.selectedProductColor : null,
                    selectedProductSize: selectedProductSize ? selectedProductSize : product.selectedProductSize ? product.selectedProductSize : null
                  }))
                }
                disabled={productCartQty >= productStock}
              >
                {" "}
                ENROLL NOW{" "}
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
          <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => dispatch(addToWishlist(product))}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
          <div className="pro-details-compare">
            <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={() => dispatch(addToCompare(product))}
            >
              <i className="pe-7s-shuffle" />
            </button>
          </div>
        </div>
      )}
      {product.tag ? (
        <div className="pro-details-meta">
      
         
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

ProgramDescriptionInfo.propTypes = {
  cartItems: PropTypes.array,
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({})
};

export default ProgramDescriptionInfo;
