import { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getPrograms } from "../../helpers/program";
import ProgramGridSingle from "../../components/Program/ProgramGridSingle";
import { useState } from "react";
const ProgramGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  
  const { products } = useSelector((state) => state.product);
  const { programs } = useSelector((state) => state.program);
  console.log(programs,"programs")
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getPrograms(programs, category, type, limit,inputText)

  const handleChangeevent = () => {
  if(inputText.length>0)
  {
    console.log(inputText,"txt");
   prods = () => {
    getPrograms(programs, category, type, limit,inputText)
  };
  console.log(prods,"prods1");
}

  }
console.log(prods,"prods");
  return (
    <Fragment>
       <div className="justify-content-end d-flex">
       <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="inputtextsearch" placeholder="Search" onChange={handleChange} value={inputText} />
  </div>
          {/* <input type="text" placeholder="&#61442; Search" className="inputtextsearch" /> */}
            <button className="btnsearch" onClick={handleChangeevent}> 
              <i class="fa fa-sliders" aria-hidden="true"></i> FILTER
            </button>
        </div>
      {prods?.map(product => {
        return (
          <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6 mt-4" key={product.id}>
            <ProgramGridSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find((cartItem) => cartItem.id === product.id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )
              }
            />
          </div>
        );
      })}
    </Fragment>
  );
};

ProgramGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProgramGrid;
