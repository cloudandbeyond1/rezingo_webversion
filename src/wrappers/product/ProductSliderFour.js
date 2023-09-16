import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import ProductGridNine from "./ProductGridNine";

const ProductSliderFour = ({ spaceBottomClass, category }) => {
  return (
    <div className={clsx("related-product-area mt-100", spaceBottomClass)}>
      <div className="container">
        <SectionTitleSeven
          titleText=" Our Wellness Dimensions"
          subtitleText="A wellness wheel is a wellness model that represents eight dimensions of wellness: spiritual, emotional, intellectual, physical, social, environmental, financial, and occupational. All of the 8 dimensions of a wellness wheel are necessary to have a balanced and happy life."
          spaceClass="mb-60"
          borderClass="no-border"
          positionClass="text-center"
        />
        {/* <div className="row">
          <ProductGridNine
            category={category}
            limit={6}
            type="new"
          />
        </div> */}
      </div>
    </div>
  );
};

ProductSliderFour.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSliderFour;
