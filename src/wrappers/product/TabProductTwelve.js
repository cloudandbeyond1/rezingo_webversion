import PropTypes from "prop-types";
import clsx from "clsx"
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitleFive from "../../components/section-title/SectionTitleFive";
import ProductGridTwelve from "./ProductGridTwelve";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import { Link } from "react-router-dom";

const TabProductTwelve = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
  sectionTitle
}) => {

    const handleClick = e => {
        e.currentTarget.nextSibling.classList.toggle("active");
      };
  return (
    <div className={clsx("product-area product-area--style2", spaceTopClass, spaceBottomClass, bgColorClass)}>
      <div className="container py-5">
      <SectionTitleSeven
          titleText="Nourish Your Body and Soul"
          subtitleText="Order Ayurvedic and other traditional foods, freshly prepared and delivered within 4 hours."
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
        <div className="product-tab-slider-wrapper position-relative">
          <Tab.Container defaultActiveKey="bestSeller">
            
            <Tab.Content>
              <Tab.Pane eventKey="bestSeller">
                  <ProductGridTwelve
                    category={category}
                    type="bestSeller"
                    limit={8}
                    spaceBottomClass="mb-25"
                  />
              </Tab.Pane>
              
            </Tab.Content>
          </Tab.Container>
          {/* <div className="funfact-btn funfact-btn-violet btn-hover mt-4">
              
                   <button style={{fontWeight: "600", fontSize: "15px",padding: "16px 56px", borderColor: "rgb(24, 26, 29)",borderRadius: "4px",borderStyle: "solid",borderWidth: "2px",backgroundColor: "#ab87cd", border: "1px solid transparent",color:"#fff",marginBottom:"30px"}}>Order Now</button>
               
              </div> */}

<div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shopdetails"}
          >
            ORDER NOW
          </Link>
        </div>

{/* <button className="p-1 button1" style={{backgroundColor:"white",color:"black",width:"100px",border:"1px solid #ab87cd"}}  onClick={e => handleClick(e)}>

ORDER NOW

</button> */}
        </div>
      </div>
    </div>
  );
};

TabProductTwelve.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  sectionTitle: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductTwelve;
