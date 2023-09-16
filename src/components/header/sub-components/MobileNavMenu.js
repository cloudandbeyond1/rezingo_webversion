import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();
  const handleClicknew = () => {
    window.location.href = '/login';
  };
  const orderfood =() => {
    window.location.href = '/cloud-kitchen';
  }
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>

        {/* <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/about"}>
            {t("about")}
          </Link>
        </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/program"}>
            {t("Program")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/Shop"}>{t("shop")}</Link>
          
          {/* <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>
                {t("cart")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>
                {t("checkout")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                {t("wishlist")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/compare"}>
                {t("compare")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                {t("my_account")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                {t("login_register")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                {t("contact_us")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/not-found"}>
                {t("404_page")}
              </Link>
            </li>
          </ul> */}



        </li>
        {/* <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/cart"}>
            {t("cart")}
          </Link>
         
        </li> */}
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li> */}
<li style={{display:"flex",marginTop:"23px"}}> 
<div className="slider-btn btn-hover">
        <button className="p-1" style={{backgroundColor:"#703ca2",color:"#fff",marginRight:"20px",width:"100px",border:"none"}}  onClick={handleClicknew}>
        Get Started
        </button>
      </div>
      <div className="btn-hover2">
        <button className="p-1" onClick={orderfood}>
        Order Food
        </button>
      </div>     
      </li>

      </ul>
    </nav>
  );
};

export default MobileNavMenu;
