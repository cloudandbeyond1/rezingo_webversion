import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";
import { Link } from "react-router-dom";
const ProductImageDescription = ({ spaceTopClass, spaceBottomClass, galleryType, product }) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const wishlistItem = wishlistItems.find(item => item.id === product.id);
  const compareItem = compareItems.find(item => item.id === product.id);

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containermaxwidth">
        <div className="row">
            <div className="col-lg-3 col-md-3 col1">
              <div>               
<div style={{width: "300px"}} class="bg-light mb-25">
<div style={{background: "#5d2d8d",color: "white"}}>
<h3 style={{color: "white",textAlign: "center", fontSize: "16px"}}>New Product</h3>
</div>
<div tabindex="-1" style={{width: "100%",display: "inline-block", marginTop: "25px"}}>
<div class="media" style={{display: "flex"}}>
<a href="">
<img src="/assets/img/product/electronics/7.png" alt="pink" class="img-fluid blur-up lazyload media" style={{width: "81px"}}/>
</a>
<div class="media-body align-self-center" style={{marginLeft: "40px"}}>
<div class="rating">
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star"></i>
</div>
<a>
<h6>Weight Gain Powder</h6>
</a>
<h4 style={{fontSize:"16px",color:"red",fontWeight:"100"}}>{currency.currencySymbol + 290}</h4>
</div>
</div>
</div>



<div tabindex="-1" style={{width: "100%",display: "inline-block"}}>
<div class="media" style={{display: "flex"}}>
<a href="">
<img src="/assets/img/product/fruits/f4.png" alt="pink" class="img-fluid blur-up lazyload media" style={{width: "81px"}}/>
</a>
<div class="media-body align-self-center" style={{marginLeft: "40px"}}>
<div class="rating">
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star"></i>
</div>
<a>
<h6>Organic Oil</h6>
</a>
<h4 style={{fontSize:"16px",color:"red",fontWeight:"100"}}>{currency.currencySymbol + 9.54}</h4>
</div>
</div>
</div>


<div tabindex="-1" style={{width: "100%",display: "inline-block"}}>
<div class="media" style={{display: "flex",marginBottom:"25px"}}>
<a href="">
<img src="/assets/img/product/auto-parts/5.png" alt="pink" class="img-fluid blur-up lazyload media" style={{width: "81px"}}/>
</a>
<div class="media-body align-self-center" style={{marginLeft: "40px"}}>
<div class="rating">
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star" style={{color:"#ffa900"}}></i>
<i class="fa fa-star"></i>
</div>
<a>
<h6>Hand Gripper</h6>
</a>
<h4 style={{fontSize:"16px",color:"red",fontWeight:"100"}}>{currency.currencySymbol + 35.6}</h4>
</div>
</div>
</div>

</div>
 </div>
                 

<div className="sidebar-widget mb-25" style={{border: "1px solid #dee0e4", justifyContent: "center", display: "grid", width: "300px"}}>

{/* <h4 className="pro-sidebar-title">Recent Projects </h4> */}

<div className="sidebar-project-wrap mt-30">

  <div className="single-sidebar-blog" style={{width:"245px"}}>

    <div className="sidebar-blog-img">

      {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}

        <img src={ process.env.PUBLIC_URL + "/assets/img/icon-img/1.png" } alt="" style={{width: "80%"}} />

      {/* </Link> */}

    </div>

    <div className="sidebar-blog-content">

      <span>Free Shipping</span>
        <h4 >
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"} style={{color:"#5a5454"}}>  Free Shipping </Link>
      </h4>

    </div>

  </div>

  <div className="single-sidebar-blog">

    <div className="sidebar-blog-img">

      {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}

        <img

          src={

            process.env.PUBLIC_URL + "/assets/img/icon-img/22.png"

          }

          alt=""

          style={{width: "80%"}}

        />

      {/* </Link> */}

    </div>

    <div className="sidebar-blog-content">

      <span>24 X 7 Service</span>

      <h4>

        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"} style={{color:"#5a5454"}}>

        Online Service For 24 X 7

        </Link>

      </h4>

    </div>

  </div>

  <div className="single-sidebar-blog">

    <div className="sidebar-blog-img">

      {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}

        <img

          src={

            process.env.PUBLIC_URL + "/assets/img/icon-img/support-4.png"

          }

          alt=""

          style={{width: "80%"}}

        />

      {/* </Link> */}

    </div>

    <div className="sidebar-blog-content">

      <span>Festival Offer</span>

      <h4>

        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"} style={{color:"#5a5454"}}>

        Special Festival Offer

        </Link>

      </h4>

    </div>

  </div>

  <div className="single-sidebar-blog">

    <div className="sidebar-blog-img">

      {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}

        <img

          src={

            process.env.PUBLIC_URL + "/assets/img/icon-img/payment.png"

          }

          alt=""

          style={{width: "80%"}}

        />

      {/* </Link> */}

    </div>

    <div className="sidebar-blog-content">

      <span>Online Payment

</span>

      <h4>

        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"} style={{color:"#5a5454"}}>

         Special Festival Offer

        </Link>

      </h4>

    </div>

  </div>

</div>

</div>
</div>


























          <div className="col-lg-4 col-md-4">
            {/* product image gallery */}
            {galleryType === "leftThumb" ? (
              <ProductImageGallerySideThumb
                product={product}
                thumbPosition="left"
              />
            ) : galleryType === "rightThumb" ? (
              <ProductImageGallerySideThumb product={product} />
            ) : galleryType === "fixedImage" ? (
              <ProductImageFixed product={product} />
            ) : (
              <ProductImageGallery product={product} />
            )}
          </div>
          <div className="col-lg-5 col-md-5">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  galleryType: PropTypes.string,
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProductImageDescription;
