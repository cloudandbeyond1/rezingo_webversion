import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
// import { useTranslation } from "react-i18next";
import MenuCart from "./sub-components/MenuCart";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCurrency } from "../../store/slices/currency-slice"
// import { useDispatch } from "react-redux";
// import { setCurrency } from "../../store/slices/currency-slice"
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const IconGroup = ({ iconWhiteClass}) => {







  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate("/");
  //   fetchUserName();
  // }, [user, loading]);






  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    dispatch(setCurrency(currencyName));
  };



  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);
  const[visible,setVisible] = useState();
  const handleClicknew = () => {
    // }
    window.location.href = '/login';
  };
  const orderfood =() => {
    window.location.href = '/cloud-kitchen';
  }


  // const changeLanguageTrigger = e => {
  //   const languageCode = e.target.value;
  //   i18n.changeLanguage(languageCode);
  //   closeMobileMenu();
  // };

  // const setCurrencyTrigger = e => {
  //   const currencyName = e.target.value;
  //   dispatch(setCurrency(currencyName));
  //   closeMobileMenu();
  // };


  // const dispatch = useDispatch();
  // const currency = useSelector((state) => state.currency);
  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>

{/* <div>
<div className="slider-btn btn-hover">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
</div> */}
      <div className="btn-hover2 d-none d-lg-block">
        <button className="p-1" onClick={orderfood}>
        Order Food
        </button>
      </div>

   {/* <div>{user?.email}</div> */}
  {user?.email?
  (
  <div className="same-style account-setting d-none d-lg-block" >
  <button
    className="account-setting-active"
    onClick={e => handleClick(e)}
  >
      <i className="pe-7s-user-female" style={{color:"#a0a0a0"}} />
  </button>
  <div className="account-dropdown">
    <ul>
    <li style={{display:"flex",borderBottom:"1px solid #eff2f7",marginLeft:"-7px"}}>
      
      {/* <i className="fa fa-user" style={{color:"#6a6a6a",marginTop:"3px",fontSize:"21px",marginRight:"7px"}} /> */}
      <img src="https://traininglabs.in/uploads/user/1687846976-Asi5tpLMnK.png" alt="img" class="radius-50" style={{ width: "31px", height: "31px", borderRadius: "50%", marginRight: "10px",marginTop:"9px"}}></img>
      <div>
      <h5 style={{marginTop:"7px"}}> Administration </h5>
        <p style={{fontSize:"11px",marginTop:"-11px",marginBottom:"20px"}}>
        {user?.email}
        </p>
        </div>
      
      </li>
      {/* <li style={{display:"flex"}}>
      <i className="fa fa-user" style={{color:"#6a6a6a",marginTop:"3px",fontSize:"21px",marginRight:"7px"}} />
        <Link to={"http://member.rezingo.com/UserInfo.html"}>{user?.email}</Link>
      </li> */}
      <li style={{display:"flex",marginTop:"10px",borderBottom:"1px solid #eff2f7"}}>
      <i className="fa fa-windows" style={{color:"#6a6a6a",marginTop:"7px",fontSize:"17px",marginRight:"20px"}} />
        <Link style={{ textTransform: "capitalize",marginBottom:"10px"}} to={process.env.PUBLIC_URL + "http://member.rezingo.com/"}>
        Admin Dashboard
        </Link>
      </li>
      <li style={{display:"flex",marginTop:"10px"}} >
      <i className="fa fa-question-circle" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"21px",marginRight:"20px"}} />
        <Link style={{marginBottom:"10px"}} to={process.env.PUBLIC_URL + "#"}>
        Help Support      
        </Link>
      </li>
      <li style={{display:"flex",marginLeft:"4px" ,}}>
      <i className="fa fa-sign-out" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"21px",marginRight:"10px"}} />
      <button className="dashboard__btn" style={{border:"none",backgroundColor:"white" , fontSize:"13px"}} onClick={logout}>
           Logout
        </button>
      </li>
    </ul>
  </div>
</div>)
   :(
   <div className="slider-btn btn-hover d-none d-lg-block ">
        <button className="p-1" id="sample"  style={{backgroundColor:"#703ca2",color:"#fff",marginRight:"10px",width:"100px",border:"none"}}  onClick={handleClicknew}>
        Get Started
        </button>
      </div>
      )
}
      

      {/* <button onClick={handleClicknew}>Click to redirect</button> */}

      







      {/* <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
           <FontAwesomeIcon icon={faSackDollar} style={{color:"#a0a0a0",fontSize:"22px"}} />
        </button>
        <div className="account-dropdown">
          <ul>
            <li style={{display:"flex"}}>
            <i className="fa fa-usd" style={{color:"#6a6a6a",fontSize:"16px",marginTop:"5px"}} />
          
              <button value="USD" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
       
            </li>
            <li style={{display:"flex"}}>
            <i className="fa fa-eur" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"16px"}} />
            <button value="EUR" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
            EUR
              </button>
            </li>
            <li style={{display:"flex"}} >
            <i className="fa fa-inr" style={{color:"#6a6a6a",fontSize:"16px",marginTop:"5px"}} />
            <button value="INR" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
            INR
              </button>
            </li>
          
          </ul>
        </div>
      </div> */}














      {/* <div className="same-style account-setting d-none d-lg-block" >
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
            <i className="pe-7s-user-female" style={{color:"#a0a0a0"}} />
        </button>
        <div className="account-dropdown">
          <ul>
          <li style={{display:"flex"}}>
            <i className="fa fa-user" style={{color:"#6a6a6a",marginTop:"3px",fontSize:"21px",marginRight:"7px"}} />
              <Link to={"http://member.rezingo.com/UserInfo.html"}>{name}
              <div>{user?.email}</div>
              </Link>
            </li>
            <li style={{display:"flex"}}>
            <i className="fa fa-user" style={{color:"#6a6a6a",marginTop:"3px",fontSize:"21px",marginRight:"7px"}} />
              <Link to={"http://member.rezingo.com/UserInfo.html"}>{user?.email}</Link>
            </li>
            <li style={{display:"flex"}}>
            <i className="fa fa-credit-card" style={{color:"#6a6a6a",marginTop:"7px",fontSize:"17px",marginRight:"7px"}} />
              <Link to={process.env.PUBLIC_URL + "#"}>
              Billing
              </Link>
            </li>
            <li style={{borderBottom:"1px solid #eff2f7",display:"flex"}} >
            <i className="fa fa-cog" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"21px",marginRight:"7px"}} />
              <Link to={process.env.PUBLIC_URL + "#"}>
              Settings
              </Link>
            </li>
            <li style={{display:"flex"}}>
            <i className="fa fa-sign-out" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"21px",marginRight:"7px"}} />
            <button className="dashboard__btn" style={{border:"none",backgroundColor:"white" , fontSize:"13px",marginLeft:"-7px"}} onClick={logout}>
                 Logout
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div> */}
      
      {/* <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={handleClicknew}
        >
          <i className="pe-7s-user-female" style={{color:"#a0a0a0"}} />
        </button> */}
        {/* <div className="account-dropdown">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>Sign In</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
              Sign Up
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                my account
              </Link>
            </li>
          </ul>
        </div> */}
      {/* </div> */}


      {/* <div className="language-currency-wrap">
    
      <div className="same-language-currency use-style">

          <span>
          <FontAwesomeIcon icon={faSackDollar} style={{color:"#a0a0a0",fontSize:"22px"}} />

        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="INR" onClick={e => setCurrencyTrigger(e)}>
                INR
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div> */}









    <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
           <FontAwesomeIcon icon={faSackDollar} style={{color:"#a0a0a0",fontSize:"22px"}} />
        </button>
        <div className="account-dropdow1" style={{width:"100px",padding:"8px 12px 10px"}}>
          <ul>
            <li style={{display:"flex"}}>
            <i className="fa fa-usd" style={{color:"#6a6a6a",fontSize:"16px",marginTop:"5px",marginRight:"5px"}} />
          
              <button value="USD" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
       
            </li>
            <li style={{display:"flex"}}>
            <i className="fa fa-eur" style={{color:"#6a6a6a",marginTop:"5px",fontSize:"16px",marginRight:"5px"}} />
            <button value="EUR" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
            EUR
              </button>
            </li>
            <li style={{display:"flex"}} >
            <i className="fa fa-inr" style={{color:"#6a6a6a",fontSize:"16px",marginTop:"5px",marginRight:"5px",marginLeft:"2px"}} />
            <button value="INR" style={{border:"none",backgroundColor:"white",color:"#1f1f1f",fontSize:"15px"}} onClick={e => setCurrencyTrigger(e)}>
            INR
              </button>
            </li>
          
          </ul>
        </div>
      </div>



      {/* <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
            <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="GBP" onClick={e => setCurrencyTrigger(e)}>
                GBP
              </button>
            </li>
          </ul>
        </div>
      </div> */}


      {/* <div className="lang-curr-style">
        <span className="title mb-2">Choose Currency</span>
        <select
          value={currency.currencyName}
          onChange={setCurrencyTrigger}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div> */}


     


      {/* <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareItems && compareItems.length ? compareItems.length : 0}
          </span>
        </Link>
      </div> */}
      {/* <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistItems && wishlistItems.length ? wishlistItems.length : 0}
          </span>
        </Link>
      </div> */}
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" style={{color:"#a0a0a0"}}/>
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};



export default IconGroup;
