import { Fragment,useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


const Checkout = () => {
  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);


  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   window.location.href="https://www.paypal.com/in/signin";
  //   // if (user) navigate("https://www.paypal.com/in/signin");
  // }, [user, loading]);

  // const validationSchema = Yup.object().shape({
	// 	fullname: Yup.string().required('Full Name is required'),
    


	// 	email: Yup.string()
  //       .required('Email is required')
  //       .email('Email is invalid'),
  //       password: Yup.string()
  //           .required('Password is required')
  //           .min(6, 'Password must be at least 6 characters'),
  //       confirmPassword: Yup.string()
  //           .required('Confirm Password is required')
  //           .oneOf([Yup.ref('password')], 'Passwords must match')
            
  //   });
  //   const formOptions = { resolver: yupResolver(validationSchema) };


  //   const { register, handleSubmit, reset, formState } = useForm(formOptions);
  //   const { errors } = formState;

    // function onSubmit(data) {
    //     // display form data on success
    //     window.location.href="https://www.paypal.com/in/signin";
    //     return false;
    // }




    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validationSchema = Yup.object().shape({
       firstname: Yup.string().required('First Name is required'),
       lastname: Yup.string().required('Last Name is required'),
       address: Yup.string().required('Address is required'),
       town: Yup.string().required('Town / City is required'),
       state : Yup.string().required('State / County is required'),
   
      // username: Yup.string()
      // .required('Username is required')
      // .min(6, 'Username must be at least 6 characters')
      // .max(20, 'Username must not exceed 20 characters'),
  
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
          phoneNumber: Yup.string()
          .min(10)
          .matches(phoneRegExp, "Phone number is not valid")
          .notRequired(),
          postcode: Yup.string()
          .required('Postcode / ZIP is required')
          .min(6),
          //  termsOfService: Yup.bool()
          //     .oneOf([true], "Please accept")
          //     .required("Please accept"),
              accountType: Yup.string().required("Select one of the above button"),

          // password: Yup.string()
          //     .required('Password is required')
          //     .min(6, 'Password must be at least 6 characters'),
          // confirmPassword: Yup.string()
          //     .required('Confirm Password is required')
          //     .oneOf([Yup.ref('password')], 'Passwords must match')
              
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
  
      // get functions to build form with useForm() hook
      const { register, handleSubmit, reset, formState } = useForm(formOptions);
      const { errors } = formState;
  
      function onSubmit(data) {
          // display form data on success
          window.location.href="https://www.paypal.com/in/signin";
          return false;
      }




  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Checkout", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row" style={{display:"flex"}}>
                
             <form className="formcheckout" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-lg-7 formcheckout1">
                <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input type="text" {...register('firstname')}
            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.firstname?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input type="text" {...register('lastname')}
            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.lastname?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input type="number" {...register('phoneNumber')}
            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email Address</label>
                          <input type="email"  {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                      </div>
                      {/* <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Company Name</label>
                          <input type="text" />
                        </div>
                      </div> */}
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Country</label>
                          <select>
                            <option>Select a country</option>
                            <option>Azerbaijan</option>                            
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>India</option>
                            <option>United States of America</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Address</label>
                          <input
                          
                            placeholder="House number and street name"
                            type="text"
                            {...register('address')}
                            className={`form-control billing-address ${errors.address ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.address?.message}</div>
                          
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Town / City</label>
                          <input type="text"  {...register('town')}
                            className={`form-control billing-address ${errors.town ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.town?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>State / County</label>
                          <input type="text" {...register('state')}
                            className={`form-control billing-address ${errors.state ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.state?.message}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Postcode / ZIP</label>
                          <input type="number" {...register('postcode')}
                            className={`form-control billing-address ${errors.postcode ? 'is-invalid' : ''}`}/>
                             <div className="invalid-feedback">{errors.postcode?.message}</div>
                        </div>
                      </div>
                      {/* <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email Address</label>
                          <input type="email"  {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
             <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="additional-info-wrap">
                      <h4>Additional information</h4>
                      <div className="additional-info">
                        <label>Order notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method">
                      <div>
    {/* <div style={{display:"flex"}}>
    <input type="radio" id="test1" style={{width:"15px",height:"25px",marginRight:"10px"}} name="radio-group" checked/>
    <label for="test1">Check payment</label> 
    </div>         
   
  
    <input type="radio" style={{width:"15px",height:"25px",marginRight:"10px"}} id="test2" name="radio-group"/>
    <label for="test2">Cash on delivery</label>


    <input type="radio" style={{width:"15px",height:"25px",marginRight:"10px"}} id="test3" name="radio-group"/>
    <label for="test3">PayPal</label> */}
     <div style={{display:"flex"}} >
 <input type="radio"  style={{width:"15px",height:"25px",marginRight:"10px"}} id="Check payment" name="fav_language" value="Check payment"/>
 <label for="Check payment">Check payment</label>
</div>
<div style={{display:"flex"}}>
 <input type="radio" style={{width:"15px",height:"25px",marginRight:"10px"}} id="Cash on delivery" name="fav_language" value="Cash on delivery"/>
 <label for="Cash on delivery">Cash on delivery</label>
</div>
<div style={{display:"flex"}}>
 <input type="radio" style={{width:"15px",height:"25px",marginRight:"10px"}} id="PayPal" name="fav_language" value="PayPal"  {...register('accountType')}
                            className={`  ${errors.accountType ? 'is-invalid' : ''}`}/>
 <label for="PayPal">PayPal</label>
</div>


                    </div>

                      </div>
                    </div>
                    {/* <div>

 <div style={{display:"flex"}}>
 <input type="radio"  style={{width:"15px",height:"25px",marginRight:"10px"}} id="html" name="fav_language" value="HTML"/>
 <label for="html">HTkkML</label>
</div>
<div style={{display:"flex"}}>
 <input type="radio" style={{width:"15px",height:"25px",marginRight:"10px"}} id="css" name="fav_language" value="CSS"/>
 <label for="css">CSS</label>
</div>
<div style={{display:"flex"}}>
 <input type="radio" style={{width:"15px",height:"25px",marginRight:"10px"}} id="javascript" name="fav_language" value="JavaScript"/>
 <label for="javascript">JavaScript</label>
</div>
</div> */}
                    <div className="place-order mt-25 slider-btn btn-hover d-lg-block">
                      <button className="btn-hover" >Place Order</button>
                    </div>
                  </div>
                </div>
                </form>
              </div>

            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shopdetails"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
