import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import ProductGridEight from "./ProductGridEight";

const ProductSliderThree = ({ spaceBottomClass, category, colorClass }) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container-fluid pt-80 pb-40 bg-light">
      
        <SectionTitleSeven
          titleText="Motivating our classes for every body"
          subtitleText="Find classes that fit your mood, goals, music taste, experience level, and schedule"
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
        <ProductGridEight
          // category={category}
          limit={6}
          colorClass={colorClass}
        />
      </div>
    </div>
  );
};

ProductSliderThree.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSliderThree;
