import PropTypes from "prop-types";
import clsx from "clsx"
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridThree from "./ProductGridThree";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const TabProductThree = ({ spaceBottomClass, category }) => {
  return (
    <div className={clsx("product-area hm9-section-padding", spaceBottomClass)}>
      <div className="container-fluid bg-light pt-60">
      <SectionTitleSeven
          titleText="Discover Wearable Products"
          subtitleText="A curated marketplace for all your gadget needs."
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
      
        <Tab.Container defaultActiveKey="newArrival">
          <Nav variant="pills" className={clsx("product-tab-list-2 mb-60")}>
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>Sale Items</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="custom-row-4">
                <ProductGridThree
                  category={category}
                  type="new"
                  limit={5}
                  spaceBottomClass="mb-35"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="custom-row-4">
                <ProductGridThree
                  category={category}
                  type="bestSeller"
                  limit={5}
                  spaceBottomClass="mb-35"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="custom-row-4">
                <ProductGridThree
                  category={category}
                  type="saleItems"
                  limit={5}
                  spaceBottomClass="mb-35"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductThree.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default TabProductThree;
