import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../components/section-title/SectionTitle";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import ProductGrid from "./ProductGrid";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category
}) => {
  return (
    <div
      className={clsx("product-area", spaceTopClass, spaceBottomClass, bgColorClass)}
    >
      <div className="container">
        

      <SectionTitleTwo
          titleText="Our Top Programs"
          positionClass="text-center"
        />
        
        <Tab.Container defaultActiveKey="bestSeller">
       
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="newArrival" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_physical">
                    <a href="#">
                      <span className="icon">
                        {/* <i className="fa fa-calendar"></i> */}
                        <img src="/assets/img/category/physical.png"></img>
                      </span>
                      <span className="icon_text">
                      Physical
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="bestSeller" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_social">
                    <a href="#">
                      <span className="icon">
                        {/* <i className="fa fa-lightbulb-o"></i> */}
                        <img src="/assets/img/category/social.png"></img>
                      </span>
                      <span className="icon_text">
                        Social
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="newArrival" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_financial">
                    <a href="#">
                      <span className="icon">
                      <img src="/assets/img/category/financial.png"></img>
                      </span>
                      <span className="icon_text">
                        Financial
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="bestSeller" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_environmental">
                    <a href="#">
                      <span className="icon">
                      <img src="/assets/img/category/environmental.png"></img>
                      </span>
                      <span className="icon_text">
                        Environmental
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="newArrival" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_intellectual">
                    <a href="#">
                      <span className="icon">
                      <img src="/assets/img/category/intellectual.png"></img>
                      </span>
                      <span className="icon_text">
                        Intellectual
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="bestSeller" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_occupational">
                    <a href="#">
                      <span className="icon">
                      <img src="/assets/img/category/occupational.png"></img>
                      </span>
                      <span className="icon_text">
                        Occupational
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="newArrival" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_spiritual">
                    <a href="#">
                      <span className="icon">
                      <img src="/assets/img/category/spiritual.png"></img>
                      </span>
                      <span className="icon_text">
                        Spiritual
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="bestSeller" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_emotional">
                    <a href="#">
                      <span className="icon">
                      <img src="/assets/img/category/emotional.png"></img>
                      </span>
                      <span className="icon_text">
                        Emotional
                      </span>
                    </a>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
                {/* <h4>New Arrivals</h4> */}
              
           
            {/* <Nav.Item>
              <Nav.Link eventKey="">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>Sale Items</h4>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="saleItems"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProduct;
