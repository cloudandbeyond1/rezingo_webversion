import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProgramSlider from "../../wrappers/Program/RelatedProgramSlider";
import ProgramDescriptionTab from "../../wrappers/Program/ProgramDescriptionTab";
import ProgramImageDescription from "../../wrappers/Program/ProgramImageDescription";
import ProgramTopSection from "../../wrappers/Program/Programtopsection";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import Programdetails from "../../wrappers/Program/ProgramDetailnew";
import { getDiscountPrice } from "../../helpers/program";

const Program = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { programs } = useSelector((state) => state.program);
  console.log(programs,"programs")
  const product = programs.find(product => product.id === id);
  console.log(product,"product")
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
    <Fragment>
      {/* <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      /> */}

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Program Details", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        {/* <ProgramTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        /> */}

        <Programdetails
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product} discountedPrice={discountedPrice}
          currency={currency}
          finalDiscountedPrice={finalDiscountedPrice}
          finalProductPrice={finalProductPrice}
          cartItems={cartItems}
          wishlistItem={wishlistItem}
          compareItem={compareItem}
        />

      {/* <ProgramTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        /> */}

        {/* Program page layout old */}

        {/* <ProgramImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        <ProgramDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product}
        />

          <VideoPopupTwo spaceBottomClass="pb-100" /> */}


        {/* product description tab */}
      

        {/* related product slider */}
        {/* <RelatedProgramSlider
          spaceBottomClass="pb-95"

          category={product.category[0]}

          /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default Program;
